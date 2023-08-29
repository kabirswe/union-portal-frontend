import { DevTool } from '@hookform/devtools';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  getGetBusinessmenuCategoriesQueryKey,
  getGetBusinessmenuLinksQueryKey,
  getGetBusinessmenuMymenuLinksQueryKey,
  useGetBusinessmenuCategories,
  useGetBusinessmenuLinks,
  useGetBusinessmenuMymenuLinks,
  usePutBusinessmenuMymenuLinks,
} from 'api/api';
import {
  GetBusinessmenuCategoriesParams,
  GetBusinessmenuLinksParams,
  GetBusinessmenuMymenuLinksParams,
  PutBusinessmenuMymenuLinksBodyAllOfBusinessDataBodies,
} from 'api/model';
import { Button } from 'components/atoms/button';
import { Checkbox } from 'components/atoms/checkbox';
import { Loading } from 'components/atoms/loading';
import { HistoryBackButton } from 'components/atoms/history-back-button';
import { NavItem } from 'components/atoms/nav-item';
import { NotifyToast, SaveToast } from 'components/atoms/save-toast';
import { Text } from 'components/atoms/text';
import { ButtonContainer } from 'components/molecules/button-container';
import { NavList } from 'components/molecules/nav-list';
import { PageHeading } from 'components/molecules/page-heading';
import { SearchBar } from 'components/molecules/search-bar';
import { Section } from 'components/molecules/section';
import { FixedControl } from 'components/organisms/fixed-control';
import { General } from 'components/templates/general';
import { generateRequestBodyWithCommonRequest } from 'libs/utils';
import _ from 'lodash';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useIsFetching, useQueryClient } from 'react-query';
import { useSelector } from 'react-redux';
import { authSelector } from 'redux/auth/authSelector';
import { InferType, object } from 'yup';
import escapeStringRegexp from 'escape-string-regexp';

interface FormValues {
  links?: string[];
}

const validationSchema = object().shape({});

type formType = InferType<typeof validationSchema> & FormValues;

let initialValues: string[] | undefined = [];

const WorkMenu: React.FC = () => {
  const {
    userInfo: { employeeCode },
  } = useSelector(authSelector);
  const checkBoxRefs = useRef<HTMLInputElement[]>([]);
  const [searchKeywords, updateSearchKeywords] = React.useState('');
  const [isFixedControlVisible, setFixedControlVisible] = useState(false);

  const queryClient = useQueryClient();
  const categoriesParams: GetBusinessmenuCategoriesParams = {
    'employee-code': employeeCode,
  };
  const menuParams: GetBusinessmenuLinksParams = {
    'employee-code': employeeCode,
  };
  const myMenuParams: GetBusinessmenuMymenuLinksParams = {
    'employee-code': employeeCode,
  };
  const getBusinessCategories = useGetBusinessmenuCategories(categoriesParams);
  const getBusinessMenuLinks = useGetBusinessmenuLinks(menuParams);
  const getBusinessMyMenuLinks = useGetBusinessmenuMymenuLinks(myMenuParams);
  const getCategoriesQueryKey = getGetBusinessmenuCategoriesQueryKey(categoriesParams);
  const getMenuLinksQueryKey = getGetBusinessmenuLinksQueryKey(menuParams);
  const getMyMenuLinksQueryKey = getGetBusinessmenuMymenuLinksQueryKey(myMenuParams);
  const isFetchingGetCategories = useIsFetching(getCategoriesQueryKey);
  const isFetchingGetMenuLinks = useIsFetching(getMenuLinksQueryKey);
  const isFetchingGetMyMenuLinks = useIsFetching(getMyMenuLinksQueryKey);
  const businessCategoriesData = getBusinessCategories.data?.data.BusinessData.Bodies;
  const businessMenuLinksData = getBusinessMenuLinks.data?.data.BusinessData.Bodies;
  const businessMyMenuLinksData = getBusinessMyMenuLinks.data?.data.BusinessData.Bodies;

  const methods = useForm<FormValues>({
    mode: 'onBlur',
    resolver: yupResolver(validationSchema),
  });
  const { register, unregister, setValue, getValues, watch, handleSubmit, control } = methods;
  const watchLinks = watch('links');

  useEffect(() => {
    if (
      !(getBusinessMenuLinks.isLoading && getBusinessMyMenuLinks.isLoading) ||
      !(isFetchingGetMenuLinks && isFetchingGetMyMenuLinks)
    ) {
      initialValues = businessMenuLinksData?.reduce((acc: string[], cur) => {
        if (cur.MandatoryFlg || businessMyMenuLinksData?.some(myLink => myLink.LinkCode === cur.LinkCode)) {
          acc.push(cur.LinkCode);
        }
        return acc;
      }, []);
      unregister('links');
      register('links');
      setValue('links', initialValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    getBusinessMenuLinks.isLoading,
    getBusinessMyMenuLinks.isLoading,
    isFetchingGetMenuLinks,
    isFetchingGetMyMenuLinks,
  ]);

  useEffect(() => {
    const isChanged = !_.isEqual(_.sortBy(initialValues), _.sortBy(watchLinks));
    if (isChanged) {
      NotifyToast(null, () => {
        setFixedControlVisible(true);
      });
    } else {
      setFixedControlVisible(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialValues, watchLinks]);

  const handleChangeKeywords = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    updateSearchKeywords(e.target.value);
  };

  const handleChangeLinks = (e: React.MouseEvent<HTMLInputElement>) => {
    const checked = (e.target as HTMLInputElement).checked;
    const value = (e.target as HTMLInputElement).value;
    const linksValues = getValues('links');
    if (checked) {
      setValue('links', linksValues ? [...linksValues, value] : [value]);
    } else {
      setValue('links', linksValues && [...linksValues].filter(v => v !== value));
    }
  };

  const handleCancel = useCallback(() => {
    checkBoxRefs.current?.map(elm => {
      elm.checked = Boolean(initialValues?.some(v => v === elm.value));
    });
    setValue('links', initialValues);
    setFixedControlVisible(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const putBusinessMenu = usePutBusinessmenuMymenuLinks({
    mutation: {
      onSuccess: () => {
        NotifyToast('保存しました', () => {
          setFixedControlVisible(false);
        });

        document.querySelector<HTMLButtonElement>('.m-search-bar__button-close')?.click();

        queryClient.invalidateQueries({ queryKey: getCategoriesQueryKey });
        queryClient.invalidateQueries({ queryKey: getMenuLinksQueryKey });
        queryClient.invalidateQueries({ queryKey: getMyMenuLinksQueryKey });
      },
      onError: () => {
        // TODO: error action
      },
    },
  });

  const onSubmit: SubmitHandler<formType> = data => {
    const params = generateRequestBodyWithCommonRequest<PutBusinessmenuMymenuLinksBodyAllOfBusinessDataBodies>({
      EmployeeCode: employeeCode,
      LinkCodes: data.links,
    });

    putBusinessMenu.mutateAsync({ data: params });
  };

  const isLoading =
    getBusinessCategories.isLoading || getBusinessMenuLinks.isLoading || getBusinessMyMenuLinks.isLoading;
  const isFetching = isFetchingGetCategories || isFetchingGetMenuLinks || isFetchingGetMyMenuLinks;

  const escapedText = escapeStringRegexp(searchKeywords.toLowerCase());
  const linksLists = businessMenuLinksData?.filter(link => new RegExp(escapedText).test(link.LinkName.toLowerCase()));

  const filterdCheckbox = (code: string) => {
    const checkbox = linksLists?.reduce((acc: JSX.Element[], cur, index) => {
      if (cur.LinkCategoryCode === code) {
        acc.push(
          <Checkbox
            key={cur.LinkCode}
            name="links"
            value={cur.LinkCode}
            defaultChecked={getValues('links')?.some(v => v === cur.LinkCode)}
            modifiers="link"
            linkProps={{
              // NOTE: Comment out for testing
              // href: cur.LinkUrl
              href: '#',
            }}
            // NOTE: Comment out for testing
            // readOnly={cur.MandatoryFlg}
            onClick={handleChangeLinks}
            ref={elm => {
              if (elm) checkBoxRefs.current[index] = elm;
            }}
          >
            {cur.LinkName}
          </Checkbox>
        );
      }
      return acc;
    }, []);
    return checkbox;
  };

  return (
    <General id="work-menu" className="p-work-menu" withFixedControl>
      <HistoryBackButton isHistoryBack>戻る</HistoryBackButton>
      <Section noPadding>
        <SearchBar
          handleCloseClick={() => updateSearchKeywords('')}
          textFieldProps={{
            onChange: handleChangeKeywords,
            onBlur: handleChangeKeywords,
          }}
        />
        <PageHeading title="業務メニュー" />
        <Text modifiers="small" colors="gray">
          マイメニューに追加したい項目にチェックを表示させてください
        </Text>
      </Section>
      <Section modifiers="v-padding">
        {isLoading || isFetching ? (
          <Loading />
        ) : (
          <Section modifiers="fill-white" noPadding>
            <FormProvider {...methods}>
              <NavList modifiers="menu">
                {businessCategoriesData?.map((category, i) => {
                  const elements = filterdCheckbox(category.LinkCategoryCode);
                  return (
                    elements &&
                    elements.length > 0 && (
                      <NavItem
                        key={i}
                        modifiers="menu-item"
                        label={category.LinkCategoryName}
                        defaultOpened={searchKeywords !== ''}
                      >
                        {elements}
                      </NavItem>
                    )
                  );
                })}
              </NavList>
            </FormProvider>
          </Section>
        )}
      </Section>
      <FixedControl modifiers="btn-container" isVisible={isFixedControlVisible}>
        <ButtonContainer>
          <Button type="button" size="huge" modifiers="third" onClick={handleCancel}>
            キャンセル
          </Button>
          <Button type="button" size="huge" modifiers="primary" onClick={handleSubmit(onSubmit)}>
            保存
          </Button>
        </ButtonContainer>
      </FixedControl>
      <SaveToast />
      {/* 
        set up the react-hook-form dev tool. see https://github.com/react-hook-form/devtools
        Unlike react-query's devtool, condition "process.env.NODE_ENV === 'development'" is not included in component itself. We have to add it by hand. 
       */}
      {process.env.NODE_ENV === 'development' && <DevTool control={control} placement="top-right" />}
    </General>
  );
};
export default WorkMenu;
