import { MenuListResponse } from 'api/model'
import { commonResponse } from 'api/mocks/responses/_commonResponse';

export const getGetBusinessmenuMymenuLinksMock: (templateId?: string | null) => MenuListResponse = (templateId?: string | null) => {

  /** for part-time job templateId === 7 */
  const parttimejobResponse: MenuListResponse = {
    ...commonResponse,
    BusinessData: {
      ...commonResponse.BusinessData,
      Bodies: [
        {
          "LinkCode": '102',
          "LinkCategoryCode": '101',
          "LinkName": "P2NET",
          "LinkUrl": "https://aeonretail.p2net.jp/p2net/login/logon/logout/",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '103',
          "LinkCategoryCode": '101',
          "LinkName": "Office365クラウドメール(OWA)",
          "LinkUrl": "https://login.microsoftonline.com/",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '119',
          "LinkCategoryCode": '101',
          "LinkName": "共通ID検索",
          "LinkUrl": "http://portalnavi/PeCIDSearch/scripts/getpecid.asp",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '199',
          "LinkCategoryCode": '101',
          "LinkName": "勤怠管理システム(新)",
          "LinkUrl": "http://jtkpwb00/Lysithea/JSP_Files/authentication/WC010_1.jsp",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '202',
          "LinkCategoryCode": '101',
          "LinkName": "電子申請システム",
          "LinkUrl": "https://lelsub.aeonpeople.biz/imart/login",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '209',
          "LinkCategoryCode": '101',
          "LinkName": "ネットスーパー売上速報",
          "LinkUrl": "http://data-aeonaibs/SalesReport_Shop",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '210',
          "LinkCategoryCode": '101',
          "LinkName": "新営業情報ＢＩＳ",
          "LinkUrl": "https://ae4wfh40.aeonpeople.biz/ar-aeon-hana-spring/auth",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '211',
          "LinkCategoryCode": '101',
          "LinkName": "売場面積計算システム",
          "LinkUrl": "https://p-uriba.aeonpeople1.aeonpeople.biz/Uriba/F_Menu/F_Menu.aspx",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '213',
          "LinkCategoryCode": '101',
          "LinkName": "情報活用メニュー",
          "LinkUrl": "https://dwppwap01.aeon.jusco.co.jp/adams2/resources/jokatsu.jsp",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '214',
          "LinkCategoryCode": '101',
          "LinkName": "ODBMS KPIツール",
          "LinkUrl": "http://postnj9s51v/Kpi_Analy_Site/Form/Kpi_Login.aspx",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '217',
          "LinkCategoryCode": '101',
          "LinkName": "イオン資材WEBサービス",
          "LinkUrl": "http://www.benrinet.co.jp/",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '219',
          "LinkCategoryCode": '101',
          "LinkName": "AG営業情報",
          "LinkUrl": "https://ae4wfh20.aeonpeople.biz/aeonag/auth",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '288',
          "LinkCategoryCode": '101',
          "LinkName": "ComPASSCabinet",
          "LinkUrl": "https://portal.aeonpeople.biz:4040/sites/D-5024/SitePages/%E3%83%9E%E3%83%8B%E3%83%A5%E3%82%A2%E3%83%AB%E3%83%BB%E6%89%8B%E9%A0%86%E6%9B%B8%20%E6%A4%9C%E7%B4%A2%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC.aspx",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '298',
          "LinkCategoryCode": '101',
          "LinkName": "【新】COSMOS",
          "LinkUrl": "http://cosmosx/COSMOS/login.aspx",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '314',
          "LinkCategoryCode": '101',
          "LinkName": "資材発注システム",
          "LinkUrl": "https://psz-web.aeonpeople.biz/adfs/",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '322',
          "LinkCategoryCode": '101',
          "LinkName": "イオンＢＣＭ総合集約システム",
          "LinkUrl": "https://www.e-kakushin.com/login/",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '325',
          "LinkCategoryCode": '101',
          "LinkName": "SMAPS購買発注システム",
          "LinkUrl": "https://smaps2-16.aeon.jusco.co.jp/SMAPS/",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '329',
          "LinkCategoryCode": '101',
          "LinkName": "売上集計",
          "LinkUrl": "http://aeonsso/GetRedirect/201310_uri.asp",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '331',
          "LinkCategoryCode": '101',
          "LinkName": "テナントコンセ精算システム",
          "LinkUrl": "http://aeonsso/GetRedirect/201310_teco.asp",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '333',
          "LinkCategoryCode": '403',
          "LinkName": "買掛支払システム",
          "LinkUrl": "http://aeonsso/GetRedirect/201310_kaikake.asp",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '335',
          "LinkCategoryCode": '403',
          "LinkName": "定期定額システム",
          "LinkUrl": "http://aeonsso/GetRedirect/201310_teiki.asp",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '341',
          "LinkCategoryCode": '101',
          "LinkName": "商品系ＤＷＨ__",
          "LinkUrl": "https://dwppwap01.aeon.jusco.co.jp/adams2/topMenu",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '365',
          "LinkCategoryCode": '101',
          "LinkName": "電子決裁システム",
          "LinkUrl": "https://arringi.aeon.jusco.co.jp/DecisionForAeonRetail/",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '381',
          "LinkCategoryCode": '101',
          "LinkName": "システムおたすけサイト",
          "LinkUrl": "https://portal.aeonpeople.biz:4040/sites/D-5015/SitePages/%E3%83%9B%E3%83%BC%E3%83%A0.aspx",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '395',
          "LinkCategoryCode": '401',
          "LinkName": "消費税計算システム(2019年10月廃止予定)",
          "LinkUrl": "http://160.243.88.231/tax0221/index.html",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '397',
          "LinkCategoryCode": '401',
          "LinkName": "ODBMS発注情報",
          "LinkUrl": "http://odweb52v/scripts/login.asp",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '398',
          "LinkCategoryCode": '401',
          "LinkName": "ODBMS検索ツール",
          "LinkUrl": "http://nj9r50v/jdaODBMS/",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '400',
          "LinkCategoryCode": '101',
          "LinkName": "AIヘルプ（Web版）",
          "LinkUrl": "https://www-aeon.thirdai.jp/",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '401',
          "LinkCategoryCode": '403',
          "LinkName": "店舗情報共有システム",
          "LinkUrl": "http://csc013/ShopInfo/scripts/login.asp",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '402',
          "LinkCategoryCode": '403',
          "LinkName": "店舗向け帳票サーバー",
          "LinkUrl": "http://rvsv02/rv2",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '405',
          "LinkCategoryCode": '401',
          "LinkName": "新たまわりくん",
          "LinkUrl": "https://gift-concierge.e-aeon.com/portal",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '406',
          "LinkCategoryCode": '401',
          "LinkName": "フジテレビフラワー（本番）",
          "LinkUrl": "https://www.fncs.jp/",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '407',
          "LinkCategoryCode": '403',
          "LinkName": "新　AEON-ANGEL",
          "LinkUrl": "https://kanri.hitomgr.jp/i5mc/login",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '408',
          "LinkCategoryCode": '401',
          "LinkName": "郵便番号検索",
          "LinkUrl": "http://www.post.japanpost.jp/zipcode/index.html",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '409',
          "LinkCategoryCode": '401',
          "LinkName": "陳列情報",
          "LinkUrl": "http://kaihaia/portal/",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '410',
          "LinkCategoryCode": '401',
          "LinkName": "店着予測",
          "LinkUrl": "http://www.scmasp.biz/AeonExpectedTimeDisplay/login.aspx",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '411',
          "LinkCategoryCode": '401',
          "LinkName": "PopNetGate(発注くん）",
          "LinkUrl": "http://popweb100/kokutipop/main/asp/login_tenpo.asp",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '412',
          "LinkCategoryCode": '401',
          "LinkName": "PopNetGate3",
          "LinkUrl": "http://popweb100/webcardsvr3/main/asp/login.asp",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '414',
          "LinkCategoryCode": '401',
          "LinkName": "プライスカードリクエスト",
          "LinkUrl": "http://postnj9s51v:8080/PriceCard_Potal/Prc000.aspx",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '422',
          "LinkCategoryCode": '403',
          "LinkName": "棚卸実施日・部門共有",
          "LinkUrl": "http://aeonsso/GetRedirect/tana.asp",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '426',
          "LinkCategoryCode": '403',
          "LinkName": "環境くん（ISO数値情報）",
          "LinkUrl": "https://affairs01.aeonpeople.biz/ems/",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '427',
          "LinkCategoryCode": '403',
          "LinkName": "環境社会貢献（黄色いﾚｼｰﾄ・ﾁｱｰｽﾞｸﾗﾌﾞ）",
          "LinkUrl": "https://affairs01.aeonpeople.biz/eco",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '434',
          "LinkCategoryCode": '402',
          "LinkName": "イオンセルフスタディサイト",
          "LinkUrl": "https://selfstudy.aeon.biz/",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '435',
          "LinkCategoryCode": '402',
          "LinkName": "売場担当者マニュアル・販売ガイドブック",
          "LinkUrl": "https://portal.aeonpeople.biz:4040/sites/00001055200/10002100/DocLib11/01%20%E6%89%8B%E9%A0%86%E6%9B%B8%E3%83%BB%E3%83%9E%E3%83%8B%E3%83%A5%E3%82%A2%E3%83%AB",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '440',
          "LinkCategoryCode": '401',
          "LinkName": "WEBチラシ",
          "LinkUrl": "http://chirashi.otoku.aeonsquare.net/pc/chirashi/index.html",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '441',
          "LinkCategoryCode": '403',
          "LinkName": "社宅/引越申請システム",
          "LinkUrl": "https://aeonsyataku.secure.force.com/shinsei/SYATAKU_Login",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '444',
          "LinkCategoryCode": '403',
          "LinkName": "新だんどりくん(TV会議予約)",
          "LinkUrl": "https://dandori.aeonpeople.biz/OfficeView.WebPages/LoginPage.aspx",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '447',
          "LinkCategoryCode": '403',
          "LinkName": "イオン社員持株会申請",
          "LinkUrl": "https://portal.aeonpeople.biz:4040/sites/00000920011/000802246000/SitePages/ホーム.aspx",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '449',
          "LinkCategoryCode": '403',
          "LinkName": "イオン行動規範",
          "LinkUrl": "https://portal.aeonpeople.biz:4040/sites/00000920011/000802247000/SitePages/ホーム.aspx",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '450',
          "LinkCategoryCode": '403',
          "LinkName": "従業員安否確認",
          "LinkUrl": "https://www.anpi.biz/anpi/login",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '455',
          "LinkCategoryCode": '403',
          "LinkName": "ＶＥＤＳナビ(釣銭両替システム）",
          "LinkUrl": "https://www.assveds.jp/assvedsnavi/",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '457',
          "LinkCategoryCode": '403',
          "LinkName": "システム見積依頼サイト",
          "LinkUrl": "https://youbou.aeon.jusco.co.jp/AeonPrjMng/page/login.jsp",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '458',
          "LinkCategoryCode": '403',
          "LinkName": "e革新(給与明細・雇用契約書)",
          "LinkUrl": "https://www.e-kakushin.com/emember/sp/login?x=09410",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '461',
          "LinkCategoryCode": '403',
          "LinkName": "TOSS建設発注システム",
          "LinkUrl": "https://PK-TOSS-WEBDB01.aeonpeople.biz/toss",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '463',
          "LinkCategoryCode": '402',
          "LinkName": "イオンスタディ・ベーシック",
          "LinkUrl": "https://portal.aeonpeople.biz:4040/sites/00001055200/10002100/DocLib11/01 手順書・マニュアル/10  イオンスタディベーシック",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '466',
          "LinkCategoryCode": '403',
          "LinkName": "債権・債務管理システムAR",
          "LinkUrl": "https://portal.aeonpeople.biz:4040/sites/00000920013/SitePages/top.aspx",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '470',
          "LinkCategoryCode": '401',
          "LinkName": "クロネコヤマト配達状況確認",
          "LinkUrl": "http://toi.kuronekoyamato.co.jp/cgi-bin/tneko",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '472',
          "LinkCategoryCode": '401',
          "LinkName": "ゆうパック配達状況確認",
          "LinkUrl": "https://trackings.post.japanpost.jp/services/srv/search/",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '476',
          "LinkCategoryCode": '403',
          "LinkName": "CSC業務分析レポート",
          "LinkUrl": "http://csc02/aeon_Rep/servlet/report/corpMenuServlet",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '483',
          "LinkCategoryCode": '403',
          "LinkName": "店舗システム各種申請",
          "LinkUrl": "https://affairs01.aeonpeople.biz/flow/",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '484',
          "LinkCategoryCode": '401',
          "LinkName": "生鮮ＭＤシステム（店舗以外）",
          "LinkUrl": "https://www.seisenmd.jp/seisenMD/",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '486',
          "LinkCategoryCode": '401',
          "LinkName": "生鮮ＭＤシステム（店舗用）",
          "LinkUrl": "http://wwwpseisenmdjp/seisenMD/",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '487',
          "LinkCategoryCode": '401',
          "LinkName": "MDware （イオンリテール）",
          "LinkUrl": "http://160.243.13.7/mdw-aretportal/ssomain.do",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '489',
          "LinkCategoryCode": '401',
          "LinkName": "ギフトカード実績参照",
          "LinkUrl": "https://affairs01.aeonpeople.biz/giftcard/giftcardtop/",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '491',
          "LinkCategoryCode": '403',
          "LinkName": "商品券発行報告",
          "LinkUrl": "https://bpo-aps01.aeonpeople.biz/adfs/bposyohinken",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '492',
          "LinkCategoryCode": '403',
          "LinkName": "店現金管理（イオンリテール）",
          "LinkUrl": "https://bpo-aps02.aeonpeople.biz/mdw-bporportal/adfsmain.do",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '495',
          "LinkCategoryCode": '403',
          "LinkName": "店現金管理（イオンリテールストア）",
          "LinkUrl": "https://bpo-aps02.aeonpeople.biz/mdw-bpodportal/adfsmain.do",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '498',
          "LinkCategoryCode": '401',
          "LinkName": "カートラック入出庫状況",
          "LinkUrl": "http://aeonsso/GetRedirect/rents/index.html",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '502',
          "LinkCategoryCode": '403',
          "LinkName": "商品券発行報告(共通ID以外)",
          "LinkUrl": "http://160.243.115.132:8080/bposyohinken/",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '505',
          "LinkCategoryCode": '403',
          "LinkName": "店現金管理(AR共通ID以外)",
          "LinkUrl": "http://bpo-aps02.aeonpeople.biz:8081/mdw-bporportal/",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '508',
          "LinkCategoryCode": '403',
          "LinkName": "店現金管理(ARS共通ID以外)",
          "LinkUrl": "http://bpo-aps02.aeonpeople.biz:8081/mdw-bpodportal/",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '557',
          "LinkCategoryCode": '401',
          "LinkName": "新重点商品管理システム（リテール)",
          "LinkUrl": "http://jyuten2/aeonretail/",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '560',
          "LinkCategoryCode": '401',
          "LinkName": "国内産牛肉 安心確認システム（お客さま用サイト）",
          "LinkUrl": "http://trace.force.com/",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '561',
          "LinkCategoryCode": '401',
          "LinkName": "国内産牛肉 安心確認システム（店舗用サイト）",
          "LinkUrl": "https://trace2.aeon.biz/shop/?dir=login&cls=input",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '573',
          "LinkCategoryCode": '101',
          "LinkName": "什器管理システム",
          "LinkUrl": "https://jpjkap01.aeonpeople.biz/JukiKanriR/",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '575',
          "LinkCategoryCode": '401',
          "LinkName": "HACCPシステム(体調管理等)",
          "LinkUrl": "https://sato-haccp.motionboard.jp/motionboard/",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '577',
          "LinkCategoryCode": '401',
          "LinkName": "新統合MDシステム（モノマイスター・zakka360/PC用）",
          "LinkUrl": "https://mdwg3-pmdw.aeonpeople.biz/mdw-monoportal/ssomain.do",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '578',
          "LinkCategoryCode": '401',
          "LinkName": "新統合MDシステム（モノマイスター・zakka.360/店舗タブレット用）",
          "LinkUrl": "https://mdwg3-pmdw.aeonpeople.biz/mdw-monoportal/ssotabletsmain.do",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '612',
          "LinkCategoryCode": '401',
          "LinkName": "トップバリュ従業員情報サイト",
          "LinkUrl": "https://staff.topvalu.net/mypageauth/",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '615',
          "LinkCategoryCode": '402',
          "LinkName": "エンゲージメント index",
          "LinkUrl": "https://wevox.io/answers/login",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '623',
          "LinkCategoryCode": '403',
          "LinkName": "取引先応援管理システム",
          "LinkUrl": "http://aeon-hd.cloudapp.net/aoc/login.php",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '626',
          "LinkCategoryCode": '401',
          "LinkName": "Shufoo！ミニチラ管理画面",
          "LinkUrl": "https://admin.shufoo.net/nhq/index.php",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '627',
          "LinkCategoryCode": '401',
          "LinkName": "cookpadPOP",
          "LinkUrl": "https://cookpad-pop.jp/aeon",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '628',
          "LinkCategoryCode": '401',
          "LinkName": "トクバイ",
          "LinkUrl": "https://tokubai.co.jp/",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '634',
          "LinkCategoryCode": '403',
          "LinkName": "新値引き管理システム",
          "LinkUrl": "https://nebiki01.aeonpeople.biz/nebiki/nebikikanri/php/servlet_signin_init.php",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '666',
          "LinkCategoryCode": '401',
          "LinkName": "ネットスーパーシステム",
          "LinkUrl": "https://shop.aeon.com/netsuper/",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '668',
          "LinkCategoryCode": '401',
          "LinkName": "e予約店舗管理システム",
          "LinkUrl": "http://160.243.137.132/",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '676',
          "LinkCategoryCode": '403',
          "LinkName": "コミュニケーションツール（ダイエー出向者用）",
          "LinkUrl": "https://dacom.daiei.co.jp/shkow/top.aspx",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '681',
          "LinkCategoryCode": '403',
          "LinkName": "プロモーション管理システム",
          "LinkUrl": "https://aeonretail.yp-promotion.com",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '688',
          "LinkCategoryCode": '403',
          "LinkName": "ストレスチェックシステム",
          "LinkUrl": "https://www.armg-service.jp/ja",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '691',
          "LinkCategoryCode": '403',
          "LinkName": "リベートシステム（リテール）",
          "LinkUrl": "http://160.243.27.231/sdcprofit1",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '692',
          "LinkCategoryCode": '403',
          "LinkName": "リベートシステム（リテールストア）",
          "LinkUrl": "http://160.243.27.231/sdcprofit2",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '693',
          "LinkCategoryCode": '403',
          "LinkName": "リベートシステム（練習環境・リテール）",
          "LinkUrl": "http://160.243.27.231/profit_prac1",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '694',
          "LinkCategoryCode": '403',
          "LinkName": "リベートシステム（練習環境・リテールストア）",
          "LinkUrl": "http://160.243.27.231/profit_prac2",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '720',
          "LinkCategoryCode": '402',
          "LinkName": "Ａ-Library",
          "LinkUrl": "https://www.aeon-ebook.com/",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '740',
          "LinkCategoryCode": '401',
          "LinkName": "MDwareグロサリー環境（中四国/PC用）",
          "LinkUrl": "https://aprk-pmdw.aeonpeople.biz/mdw-cskkportal/ssomain.do",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '741',
          "LinkCategoryCode": '401',
          "LinkName": "MDwareグロサリー環境（中四国/タブレット用）",
          "LinkUrl": "https://aprk-pmdw.aeonpeople.biz/mdw-cskkportal/ssotabletsmain.do",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '742',
          "LinkCategoryCode": '401',
          "LinkName": "MDwareグロサリー環境（東海/PC用）",
          "LinkUrl": "https://aprk-pmdw.aeonpeople.biz/mdw-tkiportal/ssomain.do",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '743',
          "LinkCategoryCode": '401',
          "LinkName": "MDwareグロサリー環境（東海/タブレット用）",
          "LinkUrl": "https://aprk-pmdw.aeonpeople.biz/mdw-tkiportal/ssotabletsmain.do",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '744',
          "LinkCategoryCode": '401',
          "LinkName": "MDwareグロサリー環境（近畿/PC用）",
          "LinkUrl": "https://aprk-pmdw.aeonpeople.biz/mdw-knkportal/ssomain.do",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '745',
          "LinkCategoryCode": '401',
          "LinkName": "MDwareグロサリー環境（近畿/タブレット用）",
          "LinkUrl": "https://aprk-pmdw.aeonpeople.biz/mdw-knkportal/ssotabletsmain.do",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '748',
          "LinkCategoryCode": '401',
          "LinkName": "MDwareグロサリー環境（北関東/PC用）",
          "LinkUrl": "https://aprk-pmdw.aeonpeople.biz/mdw-kktportal/ssomain.do",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '749',
          "LinkCategoryCode": '401',
          "LinkName": "MDwareグロサリー環境（北関東/タブレット用）",
          "LinkUrl": "https://aprk-pmdw.aeonpeople.biz/mdw-kktportal/ssotabletsmain.do",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '750',
          "LinkCategoryCode": '401',
          "LinkName": "MDwareグロサリー環境（南関東/PC用）",
          "LinkUrl": "https://aprk-pmdw.aeonpeople.biz/mdw-mktportal/ssomain.do",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '751',
          "LinkCategoryCode": '401',
          "LinkName": "MDwareグロサリー環境（南関東/タブレット用）",
          "LinkUrl": "https://aprk-pmdw.aeonpeople.biz/mdw-mktportal/ssotabletsmain.do",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '752',
          "LinkCategoryCode": '401',
          "LinkName": "MDwareグロサリー環境（北陸信越/PC用）",
          "LinkUrl": "https://aprk-pmdw.aeonpeople.biz/mdw-hkseportal/ssomain.do",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '753',
          "LinkCategoryCode": '401',
          "LinkName": "MDwareグロサリー環境（北陸信越/タブレット用）",
          "LinkUrl": "https://aprk-pmdw.aeonpeople.biz/mdw-hkseportal/ssotabletsmain.do",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '754',
          "LinkCategoryCode": '401',
          "LinkName": "MDwareグロサリー環境（グラムビューティーク/PC用）",
          "LinkUrl": "https://aprk-pmdw.aeonpeople.biz/mdw-gbtportal/ssomain.do",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '755',
          "LinkCategoryCode": '401',
          "LinkName": "MDwareグロサリー環境（グラムビューティーク/タブレット用）",
          "LinkUrl": "https://aprk-pmdw.aeonpeople.biz/mdw-gbtportal/ssotabletsmain.do",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '756',
          "LinkCategoryCode": '401',
          "LinkName": "MDwareグロサリー環境（東北/PC用）",
          "LinkUrl": "https://aprk-pmdw.aeonpeople.biz/mdw-tdrkportal/ssomain.do",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '757',
          "LinkCategoryCode": '401',
          "LinkName": "MDwareグロサリー環境（東北/タブレット用）",
          "LinkUrl": "https://aprk-pmdw.aeonpeople.biz/mdw-tdrkportal/ssotabletsmain.do",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '760',
          "LinkCategoryCode": '401',
          "LinkName": "MDware生鮮環境（東海/PC用）",
          "LinkUrl": "https://sapr-pmdw.aeonpeople.biz/mdw-stkiportal/ssomain.do",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '761',
          "LinkCategoryCode": '401',
          "LinkName": "MDware生鮮環境（東海/タブレット用）",
          "LinkUrl": "https://sapr-pmdw.aeonpeople.biz/mdw-stkiportal/ssotabletsmain.do",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '762',
          "LinkCategoryCode": '401',
          "LinkName": "MDware生鮮環境（近畿/PC用）",
          "LinkUrl": "https://sapr-pmdw.aeonpeople.biz/mdw-sknkportal/ssomain.do",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '763',
          "LinkCategoryCode": '401',
          "LinkName": "MDware生鮮環境（近畿/タブレット用）",
          "LinkUrl": "https://sapr-pmdw.aeonpeople.biz/mdw-sknkportal/ssotabletsmain.do",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '764',
          "LinkCategoryCode": '401',
          "LinkName": "MDware生鮮環境（中四国/PC用）",
          "LinkUrl": "https://sapr-pmdw.aeonpeople.biz/mdw-scskportal/ssomain.do",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '765',
          "LinkCategoryCode": '401',
          "LinkName": "MDware生鮮環境（中四国/タブレット用）",
          "LinkUrl": "https://sapr-pmdw.aeonpeople.biz/mdw-scskportal/ssotabletsmain.do",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '770',
          "LinkCategoryCode": '401',
          "LinkName": "MDware生鮮環境（北関東/PC用）",
          "LinkUrl": "https://sapr-pmdw.aeonpeople.biz/mdw-skktportal/ssomain.do",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '771',
          "LinkCategoryCode": '401',
          "LinkName": "MDware生鮮環境（北関東/タブレット用）",
          "LinkUrl": "https://sapr-pmdw.aeonpeople.biz/mdw-skktportal/ssotabletsmain.do",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '772',
          "LinkCategoryCode": '401',
          "LinkName": "MDware生鮮環境（南関東/PC用）",
          "LinkUrl": "https://sapr-pmdw.aeonpeople.biz/mdw-smktportal/ssomain.do",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '773',
          "LinkCategoryCode": '401',
          "LinkName": "MDware生鮮環境（南関東/タブレット用）",
          "LinkUrl": "https://sapr-pmdw.aeonpeople.biz/mdw-smktportal/ssotabletsmain.do",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '774',
          "LinkCategoryCode": '401',
          "LinkName": "MDware生鮮環境（北陸信越/PC用）",
          "LinkUrl": "https://sapr-pmdw.aeonpeople.biz/mdw-shksportal/ssomain.do",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '775',
          "LinkCategoryCode": '401',
          "LinkName": "MDware生鮮環境（北陸信越/タブレット用）",
          "LinkUrl": "https://sapr-pmdw.aeonpeople.biz/mdw-shksportal/ssotabletsmain.do",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '776',
          "LinkCategoryCode": '401',
          "LinkName": "MDware生鮮環境（本部）",
          "LinkUrl": "https://sapr-pmdw.aeonpeople.biz/mdw-scomportal/ssomain.do",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '837',
          "LinkCategoryCode": '403',
          "LinkName": "CSC業務分析レポート(イオンリテール用)",
          "LinkUrl": "http://160.243.129.213/syataku/csc/csc_aeon_retail.html",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '973',
          "LinkCategoryCode": '999',
          "LinkName": "MDwareグロサリー環境（テスト環境）",
          "LinkUrl": "http://160.243.81.126:8081/mdw-aeonGRportal/tabletsmain.do",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '974',
          "LinkCategoryCode": '999',
          "LinkName": "MDwareデイリー・デリカ（テスト環境）",
          "LinkUrl": "http://160.243.13.100/mdw-testportal/ssomain.do",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '984',
          "LinkCategoryCode": '999',
          "LinkName": "生鮮ＭＤシステム（テスト環境）",
          "LinkUrl": "https://intro.seisenmd.jp/seisenMD/",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '998',
          "LinkCategoryCode": '101',
          "LinkName": "人事異動の際の手順書",
          "LinkUrl": "http://wwwaeon/cosmoshelp/index2.htm",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '438',
          "LinkCategoryCode": '402',
          "LinkName": "登録販売者外部研修e-ラーニング",
          "LinkUrl": "http://ex.npel.jp/",
          "MandatoryFlg": false,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '443',
          "LinkCategoryCode": '403',
          "LinkName": "新だんどりくん(イオンタワー、Annex来訪予約、施設予約)",
          "LinkUrl": "https://dandori.aeonpeople.biz/OfficeView.WebPages/ADFSLoginPage.aspx",
          "MandatoryFlg": false,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '620',
          "LinkCategoryCode": '403',
          "LinkName": "ＴＢＰ管理システム",
          "LinkUrl": "https://tbp.aeonpeople.biz/aeon_tbp",
          "MandatoryFlg": false,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '621',
          "LinkCategoryCode": '403',
          "LinkName": "WAONｎ倍管理システム",
          "LinkUrl": "https://waon.aeonpeople.biz/aeon_waon",
          "MandatoryFlg": false,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '388',
          "LinkCategoryCode": '401',
          "LinkName": "【衣料品専用】販売計画支援システム",
          "LinkUrl": "http://portal.aeonpeople.biz:8080/sites/D-0104/_layouts/15/PecLoginPage/PecLogin.aspx",
          "MandatoryFlg": false,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '392',
          "LinkCategoryCode": '403',
          "LinkName": "イオンアーカイブス",
          "LinkUrl": "https://portal.aeonpeople.biz:4040/sites/00000920004",
          "MandatoryFlg": false,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '423',
          "LinkCategoryCode": '401',
          "LinkName": "GYRO（携帯電話営業管理システム)",
          "LinkUrl": "http://aeongyroap01/login",
          "MandatoryFlg": false,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '477',
          "LinkCategoryCode": '403',
          "LinkName": "CSC業務分析レポート(管理者用）",
          "LinkUrl": "http://csc02/aeon_Rep/servlet/report/cscMenuServlet",
          "MandatoryFlg": false,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '479',
          "LinkCategoryCode": '403',
          "LinkName": "CSC業務分析レポート(HD用）",
          "LinkUrl": "http://csc02/aeon_Rep/servlet/report/cscMenuServlet",
          "MandatoryFlg": false,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '485',
          "LinkCategoryCode": '403',
          "LinkName": "イオン商品券発注システム",
          "LinkUrl": "https://bpo-aps01.aeonpeople.biz/adfs/ticket",
          "MandatoryFlg": false,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '488',
          "LinkCategoryCode": '403',
          "LinkName": "イオン商品券発注システム(共通ID以外)",
          "LinkUrl": "https://bpo-aps01.aeonpeople.biz/ticket/",
          "MandatoryFlg": false,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '630',
          "LinkCategoryCode": '403',
          "LinkName": "共通マスタ（部署コード払出）",
          "LinkUrl": "http://160.243.12.36:7001/vm/vmg_101/BushocodeAuthentication.do",
          "MandatoryFlg": false,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '631',
          "LinkCategoryCode": '403',
          "LinkName": "共通マスタ照会",
          "LinkUrl": "http://160.243.12.36:7001/vm/vmg_301/authentication4.do",
          "MandatoryFlg": false,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '636',
          "LinkCategoryCode": '401',
          "LinkName": "MDwareグロサリー環境（イオン東北/PC用）",
          "LinkUrl": "https://thk-pmdw.aeonpeople.biz/mdw-thkportal/ssomain.do",
          "MandatoryFlg": false,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '680',
          "LinkCategoryCode": '402',
          "LinkName": "マニュアルサイト【管理者用】",
          "LinkUrl": "http://portal.aeonpeople.biz:8080/sites/D-0104/_layouts/15/PecLoginPage/PecLogin.aspx",
          "MandatoryFlg": false,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '686',
          "LinkCategoryCode": '403',
          "LinkName": "WAON POINT管理システム（AR用）",
          "LinkUrl": "https://point.aeon.co.jp/cmkg/app/index.html#/cmKGcomm01?KAISHA_CD=0105&LOCATION=KG&GAMEN_ID=cmKGcomm01",
          "MandatoryFlg": false,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '996',
          "LinkCategoryCode": '999',
          "LinkName": "プライス・ウォッチ（ＰＷ）支援システム【パイロット用】",
          "LinkUrl": "https://pw.aeon.biz/pricewatch_pc/login",
          "MandatoryFlg": false,
          "CommonLinkFlg": false
        }
      ]
    }
  }

  /** for store manager */
  const storemanagerResponse: MenuListResponse = {
    ...commonResponse,
    BusinessData: {
      ...commonResponse.BusinessData,
      Bodies: [
        {
          "LinkCode": '102',
          "LinkCategoryCode": '101',
          "LinkName": "P2NET",
          "LinkUrl": "https://aeonretail.p2net.jp/p2net/login/logon/logout/",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '103',
          "LinkCategoryCode": '101',
          "LinkName": "Office365クラウドメール(OWA)",
          "LinkUrl": "https://login.microsoftonline.com/",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '119',
          "LinkCategoryCode": '101',
          "LinkName": "共通ID検索",
          "LinkUrl": "http://portalnavi/PeCIDSearch/scripts/getpecid.asp",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '199',
          "LinkCategoryCode": '101',
          "LinkName": "勤怠管理システム(新)",
          "LinkUrl": "http://jtkpwb00/Lysithea/JSP_Files/authentication/WC010_1.jsp",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '202',
          "LinkCategoryCode": '101',
          "LinkName": "電子申請システム",
          "LinkUrl": "https://lelsub.aeonpeople.biz/imart/login",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '209',
          "LinkCategoryCode": '101',
          "LinkName": "ネットスーパー売上速報",
          "LinkUrl": "http://data-aeonaibs/SalesReport_Shop",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '210',
          "LinkCategoryCode": '101',
          "LinkName": "新営業情報ＢＩＳ",
          "LinkUrl": "https://ae4wfh40.aeonpeople.biz/ar-aeon-hana-spring/auth",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '211',
          "LinkCategoryCode": '101',
          "LinkName": "売場面積計算システム",
          "LinkUrl": "https://p-uriba.aeonpeople1.aeonpeople.biz/Uriba/F_Menu/F_Menu.aspx",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '213',
          "LinkCategoryCode": '101',
          "LinkName": "情報活用メニュー",
          "LinkUrl": "https://dwppwap01.aeon.jusco.co.jp/adams2/resources/jokatsu.jsp",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '214',
          "LinkCategoryCode": '101',
          "LinkName": "ODBMS KPIツール",
          "LinkUrl": "http://postnj9s51v/Kpi_Analy_Site/Form/Kpi_Login.aspx",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '217',
          "LinkCategoryCode": '101',
          "LinkName": "イオン資材WEBサービス",
          "LinkUrl": "http://www.benrinet.co.jp/",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '219',
          "LinkCategoryCode": '101',
          "LinkName": "AG営業情報",
          "LinkUrl": "https://ae4wfh20.aeonpeople.biz/aeonag/auth",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '288',
          "LinkCategoryCode": '101',
          "LinkName": "ComPASSCabinet",
          "LinkUrl": "https://portal.aeonpeople.biz:4040/sites/D-5024/SitePages/%E3%83%9E%E3%83%8B%E3%83%A5%E3%82%A2%E3%83%AB%E3%83%BB%E6%89%8B%E9%A0%86%E6%9B%B8%20%E6%A4%9C%E7%B4%A2%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC.aspx",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '298',
          "LinkCategoryCode": '101',
          "LinkName": "【新】COSMOS",
          "LinkUrl": "http://cosmosx/COSMOS/login.aspx",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '314',
          "LinkCategoryCode": '101',
          "LinkName": "資材発注システム",
          "LinkUrl": "https://psz-web.aeonpeople.biz/adfs/",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '322',
          "LinkCategoryCode": '101',
          "LinkName": "イオンＢＣＭ総合集約システム",
          "LinkUrl": "https://www.e-kakushin.com/login/",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '325',
          "LinkCategoryCode": '101',
          "LinkName": "SMAPS購買発注システム",
          "LinkUrl": "https://smaps2-16.aeon.jusco.co.jp/SMAPS/",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '329',
          "LinkCategoryCode": '101',
          "LinkName": "売上集計",
          "LinkUrl": "http://aeonsso/GetRedirect/201310_uri.asp",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '331',
          "LinkCategoryCode": '101',
          "LinkName": "テナントコンセ精算システム",
          "LinkUrl": "http://aeonsso/GetRedirect/201310_teco.asp",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '333',
          "LinkCategoryCode": '403',
          "LinkName": "買掛支払システム",
          "LinkUrl": "http://aeonsso/GetRedirect/201310_kaikake.asp",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '335',
          "LinkCategoryCode": '403',
          "LinkName": "定期定額システム",
          "LinkUrl": "http://aeonsso/GetRedirect/201310_teiki.asp",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '341',
          "LinkCategoryCode": '101',
          "LinkName": "商品系ＤＷＨ__",
          "LinkUrl": "https://dwppwap01.aeon.jusco.co.jp/adams2/topMenu",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '365',
          "LinkCategoryCode": '101',
          "LinkName": "電子決裁システム",
          "LinkUrl": "https://arringi.aeon.jusco.co.jp/DecisionForAeonRetail/",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '381',
          "LinkCategoryCode": '101',
          "LinkName": "システムおたすけサイト",
          "LinkUrl": "https://portal.aeonpeople.biz:4040/sites/D-5015/SitePages/%E3%83%9B%E3%83%BC%E3%83%A0.aspx",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '395',
          "LinkCategoryCode": '401',
          "LinkName": "消費税計算システム(2019年10月廃止予定)",
          "LinkUrl": "http://160.243.88.231/tax0221/index.html",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '397',
          "LinkCategoryCode": '401',
          "LinkName": "ODBMS発注情報",
          "LinkUrl": "http://odweb52v/scripts/login.asp",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '398',
          "LinkCategoryCode": '401',
          "LinkName": "ODBMS検索ツール",
          "LinkUrl": "http://nj9r50v/jdaODBMS/",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '400',
          "LinkCategoryCode": '101',
          "LinkName": "AIヘルプ（Web版）",
          "LinkUrl": "https://www-aeon.thirdai.jp/",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '401',
          "LinkCategoryCode": '403',
          "LinkName": "店舗情報共有システム",
          "LinkUrl": "http://csc013/ShopInfo/scripts/login.asp",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '402',
          "LinkCategoryCode": '403',
          "LinkName": "店舗向け帳票サーバー",
          "LinkUrl": "http://rvsv02/rv2",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '405',
          "LinkCategoryCode": '401',
          "LinkName": "新たまわりくん",
          "LinkUrl": "https://gift-concierge.e-aeon.com/portal",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '406',
          "LinkCategoryCode": '401',
          "LinkName": "フジテレビフラワー（本番）",
          "LinkUrl": "https://www.fncs.jp/",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '407',
          "LinkCategoryCode": '403',
          "LinkName": "新　AEON-ANGEL",
          "LinkUrl": "https://kanri.hitomgr.jp/i5mc/login",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '408',
          "LinkCategoryCode": '401',
          "LinkName": "郵便番号検索",
          "LinkUrl": "http://www.post.japanpost.jp/zipcode/index.html",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '409',
          "LinkCategoryCode": '401',
          "LinkName": "陳列情報",
          "LinkUrl": "http://kaihaia/portal/",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '410',
          "LinkCategoryCode": '401',
          "LinkName": "店着予測",
          "LinkUrl": "http://www.scmasp.biz/AeonExpectedTimeDisplay/login.aspx",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '411',
          "LinkCategoryCode": '401',
          "LinkName": "PopNetGate(発注くん）",
          "LinkUrl": "http://popweb100/kokutipop/main/asp/login_tenpo.asp",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '412',
          "LinkCategoryCode": '401',
          "LinkName": "PopNetGate3",
          "LinkUrl": "http://popweb100/webcardsvr3/main/asp/login.asp",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '414',
          "LinkCategoryCode": '401',
          "LinkName": "プライスカードリクエスト",
          "LinkUrl": "http://postnj9s51v:8080/PriceCard_Potal/Prc000.aspx",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '422',
          "LinkCategoryCode": '403',
          "LinkName": "棚卸実施日・部門共有",
          "LinkUrl": "http://aeonsso/GetRedirect/tana.asp",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '426',
          "LinkCategoryCode": '403',
          "LinkName": "環境くん（ISO数値情報）",
          "LinkUrl": "https://affairs01.aeonpeople.biz/ems/",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '427',
          "LinkCategoryCode": '403',
          "LinkName": "環境社会貢献（黄色いﾚｼｰﾄ・ﾁｱｰｽﾞｸﾗﾌﾞ）",
          "LinkUrl": "https://affairs01.aeonpeople.biz/eco",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '434',
          "LinkCategoryCode": '402',
          "LinkName": "イオンセルフスタディサイト",
          "LinkUrl": "https://selfstudy.aeon.biz/",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '435',
          "LinkCategoryCode": '402',
          "LinkName": "売場担当者マニュアル・販売ガイドブック",
          "LinkUrl": "https://portal.aeonpeople.biz:4040/sites/00001055200/10002100/DocLib11/01%20%E6%89%8B%E9%A0%86%E6%9B%B8%E3%83%BB%E3%83%9E%E3%83%8B%E3%83%A5%E3%82%A2%E3%83%AB",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '440',
          "LinkCategoryCode": '401',
          "LinkName": "WEBチラシ",
          "LinkUrl": "http://chirashi.otoku.aeonsquare.net/pc/chirashi/index.html",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '441',
          "LinkCategoryCode": '403',
          "LinkName": "社宅/引越申請システム",
          "LinkUrl": "https://aeonsyataku.secure.force.com/shinsei/SYATAKU_Login",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '444',
          "LinkCategoryCode": '403',
          "LinkName": "新だんどりくん(TV会議予約)",
          "LinkUrl": "https://dandori.aeonpeople.biz/OfficeView.WebPages/LoginPage.aspx",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '447',
          "LinkCategoryCode": '403',
          "LinkName": "イオン社員持株会申請",
          "LinkUrl": "https://portal.aeonpeople.biz:4040/sites/00000920011/000802246000/SitePages/ホーム.aspx",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '449',
          "LinkCategoryCode": '403',
          "LinkName": "イオン行動規範",
          "LinkUrl": "https://portal.aeonpeople.biz:4040/sites/00000920011/000802247000/SitePages/ホーム.aspx",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '450',
          "LinkCategoryCode": '403',
          "LinkName": "従業員安否確認",
          "LinkUrl": "https://www.anpi.biz/anpi/login",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '455',
          "LinkCategoryCode": '403',
          "LinkName": "ＶＥＤＳナビ(釣銭両替システム）",
          "LinkUrl": "https://www.assveds.jp/assvedsnavi/",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '457',
          "LinkCategoryCode": '403',
          "LinkName": "システム見積依頼サイト",
          "LinkUrl": "https://youbou.aeon.jusco.co.jp/AeonPrjMng/page/login.jsp",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '458',
          "LinkCategoryCode": '403',
          "LinkName": "e革新(給与明細・雇用契約書)",
          "LinkUrl": "https://www.e-kakushin.com/emember/sp/login?x=09410",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '461',
          "LinkCategoryCode": '403',
          "LinkName": "TOSS建設発注システム",
          "LinkUrl": "https://PK-TOSS-WEBDB01.aeonpeople.biz/toss",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '463',
          "LinkCategoryCode": '402',
          "LinkName": "イオンスタディ・ベーシック",
          "LinkUrl": "https://portal.aeonpeople.biz:4040/sites/00001055200/10002100/DocLib11/01 手順書・マニュアル/10  イオンスタディベーシック",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '466',
          "LinkCategoryCode": '403',
          "LinkName": "債権・債務管理システムAR",
          "LinkUrl": "https://portal.aeonpeople.biz:4040/sites/00000920013/SitePages/top.aspx",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '470',
          "LinkCategoryCode": '401',
          "LinkName": "クロネコヤマト配達状況確認",
          "LinkUrl": "http://toi.kuronekoyamato.co.jp/cgi-bin/tneko",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '472',
          "LinkCategoryCode": '401',
          "LinkName": "ゆうパック配達状況確認",
          "LinkUrl": "https://trackings.post.japanpost.jp/services/srv/search/",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '476',
          "LinkCategoryCode": '403',
          "LinkName": "CSC業務分析レポート",
          "LinkUrl": "http://csc02/aeon_Rep/servlet/report/corpMenuServlet",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '483',
          "LinkCategoryCode": '403',
          "LinkName": "店舗システム各種申請",
          "LinkUrl": "https://affairs01.aeonpeople.biz/flow/",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '484',
          "LinkCategoryCode": '401',
          "LinkName": "生鮮ＭＤシステム（店舗以外）",
          "LinkUrl": "https://www.seisenmd.jp/seisenMD/",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '486',
          "LinkCategoryCode": '401',
          "LinkName": "生鮮ＭＤシステム（店舗用）",
          "LinkUrl": "http://wwwpseisenmdjp/seisenMD/",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '487',
          "LinkCategoryCode": '401',
          "LinkName": "MDware （イオンリテール）",
          "LinkUrl": "http://160.243.13.7/mdw-aretportal/ssomain.do",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '489',
          "LinkCategoryCode": '401',
          "LinkName": "ギフトカード実績参照",
          "LinkUrl": "https://affairs01.aeonpeople.biz/giftcard/giftcardtop/",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '491',
          "LinkCategoryCode": '403',
          "LinkName": "商品券発行報告",
          "LinkUrl": "https://bpo-aps01.aeonpeople.biz/adfs/bposyohinken",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '492',
          "LinkCategoryCode": '403',
          "LinkName": "店現金管理（イオンリテール）",
          "LinkUrl": "https://bpo-aps02.aeonpeople.biz/mdw-bporportal/adfsmain.do",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '495',
          "LinkCategoryCode": '403',
          "LinkName": "店現金管理（イオンリテールストア）",
          "LinkUrl": "https://bpo-aps02.aeonpeople.biz/mdw-bpodportal/adfsmain.do",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '498',
          "LinkCategoryCode": '401',
          "LinkName": "カートラック入出庫状況",
          "LinkUrl": "http://aeonsso/GetRedirect/rents/index.html",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '502',
          "LinkCategoryCode": '403',
          "LinkName": "商品券発行報告(共通ID以外)",
          "LinkUrl": "http://160.243.115.132:8080/bposyohinken/",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '505',
          "LinkCategoryCode": '403',
          "LinkName": "店現金管理(AR共通ID以外)",
          "LinkUrl": "http://bpo-aps02.aeonpeople.biz:8081/mdw-bporportal/",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '508',
          "LinkCategoryCode": '403',
          "LinkName": "店現金管理(ARS共通ID以外)",
          "LinkUrl": "http://bpo-aps02.aeonpeople.biz:8081/mdw-bpodportal/",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '557',
          "LinkCategoryCode": '401',
          "LinkName": "新重点商品管理システム（リテール)",
          "LinkUrl": "http://jyuten2/aeonretail/",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '560',
          "LinkCategoryCode": '401',
          "LinkName": "国内産牛肉 安心確認システム（お客さま用サイト）",
          "LinkUrl": "http://trace.force.com/",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '561',
          "LinkCategoryCode": '401',
          "LinkName": "国内産牛肉 安心確認システム（店舗用サイト）",
          "LinkUrl": "https://trace2.aeon.biz/shop/?dir=login&cls=input",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '573',
          "LinkCategoryCode": '101',
          "LinkName": "什器管理システム",
          "LinkUrl": "https://jpjkap01.aeonpeople.biz/JukiKanriR/",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '575',
          "LinkCategoryCode": '401',
          "LinkName": "HACCPシステム(体調管理等)",
          "LinkUrl": "https://sato-haccp.motionboard.jp/motionboard/",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '577',
          "LinkCategoryCode": '401',
          "LinkName": "新統合MDシステム（モノマイスター・zakka360/PC用）",
          "LinkUrl": "https://mdwg3-pmdw.aeonpeople.biz/mdw-monoportal/ssomain.do",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '578',
          "LinkCategoryCode": '401',
          "LinkName": "新統合MDシステム（モノマイスター・zakka.360/店舗タブレット用）",
          "LinkUrl": "https://mdwg3-pmdw.aeonpeople.biz/mdw-monoportal/ssotabletsmain.do",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '612',
          "LinkCategoryCode": '401',
          "LinkName": "トップバリュ従業員情報サイト",
          "LinkUrl": "https://staff.topvalu.net/mypageauth/",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '615',
          "LinkCategoryCode": '402',
          "LinkName": "エンゲージメント index",
          "LinkUrl": "https://wevox.io/answers/login",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '623',
          "LinkCategoryCode": '403',
          "LinkName": "取引先応援管理システム",
          "LinkUrl": "http://aeon-hd.cloudapp.net/aoc/login.php",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '626',
          "LinkCategoryCode": '401',
          "LinkName": "Shufoo！ミニチラ管理画面",
          "LinkUrl": "https://admin.shufoo.net/nhq/index.php",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '627',
          "LinkCategoryCode": '401',
          "LinkName": "cookpadPOP",
          "LinkUrl": "https://cookpad-pop.jp/aeon",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '628',
          "LinkCategoryCode": '401',
          "LinkName": "トクバイ",
          "LinkUrl": "https://tokubai.co.jp/",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '634',
          "LinkCategoryCode": '403',
          "LinkName": "新値引き管理システム",
          "LinkUrl": "https://nebiki01.aeonpeople.biz/nebiki/nebikikanri/php/servlet_signin_init.php",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '666',
          "LinkCategoryCode": '401',
          "LinkName": "ネットスーパーシステム",
          "LinkUrl": "https://shop.aeon.com/netsuper/",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '668',
          "LinkCategoryCode": '401',
          "LinkName": "e予約店舗管理システム",
          "LinkUrl": "http://160.243.137.132/",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '676',
          "LinkCategoryCode": '403',
          "LinkName": "コミュニケーションツール（ダイエー出向者用）",
          "LinkUrl": "https://dacom.daiei.co.jp/shkow/top.aspx",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '681',
          "LinkCategoryCode": '403',
          "LinkName": "プロモーション管理システム",
          "LinkUrl": "https://aeonretail.yp-promotion.com",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '688',
          "LinkCategoryCode": '403',
          "LinkName": "ストレスチェックシステム",
          "LinkUrl": "https://www.armg-service.jp/ja",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '691',
          "LinkCategoryCode": '403',
          "LinkName": "リベートシステム（リテール）",
          "LinkUrl": "http://160.243.27.231/sdcprofit1",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '692',
          "LinkCategoryCode": '403',
          "LinkName": "リベートシステム（リテールストア）",
          "LinkUrl": "http://160.243.27.231/sdcprofit2",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '693',
          "LinkCategoryCode": '403',
          "LinkName": "リベートシステム（練習環境・リテール）",
          "LinkUrl": "http://160.243.27.231/profit_prac1",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '694',
          "LinkCategoryCode": '403',
          "LinkName": "リベートシステム（練習環境・リテールストア）",
          "LinkUrl": "http://160.243.27.231/profit_prac2",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '720',
          "LinkCategoryCode": '402',
          "LinkName": "Ａ-Library",
          "LinkUrl": "https://www.aeon-ebook.com/",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '740',
          "LinkCategoryCode": '401',
          "LinkName": "MDwareグロサリー環境（中四国/PC用）",
          "LinkUrl": "https://aprk-pmdw.aeonpeople.biz/mdw-cskkportal/ssomain.do",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '741',
          "LinkCategoryCode": '401',
          "LinkName": "MDwareグロサリー環境（中四国/タブレット用）",
          "LinkUrl": "https://aprk-pmdw.aeonpeople.biz/mdw-cskkportal/ssotabletsmain.do",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '742',
          "LinkCategoryCode": '401',
          "LinkName": "MDwareグロサリー環境（東海/PC用）",
          "LinkUrl": "https://aprk-pmdw.aeonpeople.biz/mdw-tkiportal/ssomain.do",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '743',
          "LinkCategoryCode": '401',
          "LinkName": "MDwareグロサリー環境（東海/タブレット用）",
          "LinkUrl": "https://aprk-pmdw.aeonpeople.biz/mdw-tkiportal/ssotabletsmain.do",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '744',
          "LinkCategoryCode": '401',
          "LinkName": "MDwareグロサリー環境（近畿/PC用）",
          "LinkUrl": "https://aprk-pmdw.aeonpeople.biz/mdw-knkportal/ssomain.do",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '745',
          "LinkCategoryCode": '401',
          "LinkName": "MDwareグロサリー環境（近畿/タブレット用）",
          "LinkUrl": "https://aprk-pmdw.aeonpeople.biz/mdw-knkportal/ssotabletsmain.do",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '748',
          "LinkCategoryCode": '401',
          "LinkName": "MDwareグロサリー環境（北関東/PC用）",
          "LinkUrl": "https://aprk-pmdw.aeonpeople.biz/mdw-kktportal/ssomain.do",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '749',
          "LinkCategoryCode": '401',
          "LinkName": "MDwareグロサリー環境（北関東/タブレット用）",
          "LinkUrl": "https://aprk-pmdw.aeonpeople.biz/mdw-kktportal/ssotabletsmain.do",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '750',
          "LinkCategoryCode": '401',
          "LinkName": "MDwareグロサリー環境（南関東/PC用）",
          "LinkUrl": "https://aprk-pmdw.aeonpeople.biz/mdw-mktportal/ssomain.do",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '751',
          "LinkCategoryCode": '401',
          "LinkName": "MDwareグロサリー環境（南関東/タブレット用）",
          "LinkUrl": "https://aprk-pmdw.aeonpeople.biz/mdw-mktportal/ssotabletsmain.do",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '752',
          "LinkCategoryCode": '401',
          "LinkName": "MDwareグロサリー環境（北陸信越/PC用）",
          "LinkUrl": "https://aprk-pmdw.aeonpeople.biz/mdw-hkseportal/ssomain.do",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '753',
          "LinkCategoryCode": '401',
          "LinkName": "MDwareグロサリー環境（北陸信越/タブレット用）",
          "LinkUrl": "https://aprk-pmdw.aeonpeople.biz/mdw-hkseportal/ssotabletsmain.do",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '754',
          "LinkCategoryCode": '401',
          "LinkName": "MDwareグロサリー環境（グラムビューティーク/PC用）",
          "LinkUrl": "https://aprk-pmdw.aeonpeople.biz/mdw-gbtportal/ssomain.do",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '755',
          "LinkCategoryCode": '401',
          "LinkName": "MDwareグロサリー環境（グラムビューティーク/タブレット用）",
          "LinkUrl": "https://aprk-pmdw.aeonpeople.biz/mdw-gbtportal/ssotabletsmain.do",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '756',
          "LinkCategoryCode": '401',
          "LinkName": "MDwareグロサリー環境（東北/PC用）",
          "LinkUrl": "https://aprk-pmdw.aeonpeople.biz/mdw-tdrkportal/ssomain.do",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '757',
          "LinkCategoryCode": '401',
          "LinkName": "MDwareグロサリー環境（東北/タブレット用）",
          "LinkUrl": "https://aprk-pmdw.aeonpeople.biz/mdw-tdrkportal/ssotabletsmain.do",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '760',
          "LinkCategoryCode": '401',
          "LinkName": "MDware生鮮環境（東海/PC用）",
          "LinkUrl": "https://sapr-pmdw.aeonpeople.biz/mdw-stkiportal/ssomain.do",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '761',
          "LinkCategoryCode": '401',
          "LinkName": "MDware生鮮環境（東海/タブレット用）",
          "LinkUrl": "https://sapr-pmdw.aeonpeople.biz/mdw-stkiportal/ssotabletsmain.do",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '762',
          "LinkCategoryCode": '401',
          "LinkName": "MDware生鮮環境（近畿/PC用）",
          "LinkUrl": "https://sapr-pmdw.aeonpeople.biz/mdw-sknkportal/ssomain.do",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '763',
          "LinkCategoryCode": '401',
          "LinkName": "MDware生鮮環境（近畿/タブレット用）",
          "LinkUrl": "https://sapr-pmdw.aeonpeople.biz/mdw-sknkportal/ssotabletsmain.do",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '764',
          "LinkCategoryCode": '401',
          "LinkName": "MDware生鮮環境（中四国/PC用）",
          "LinkUrl": "https://sapr-pmdw.aeonpeople.biz/mdw-scskportal/ssomain.do",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '765',
          "LinkCategoryCode": '401',
          "LinkName": "MDware生鮮環境（中四国/タブレット用）",
          "LinkUrl": "https://sapr-pmdw.aeonpeople.biz/mdw-scskportal/ssotabletsmain.do",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '770',
          "LinkCategoryCode": '401',
          "LinkName": "MDware生鮮環境（北関東/PC用）",
          "LinkUrl": "https://sapr-pmdw.aeonpeople.biz/mdw-skktportal/ssomain.do",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '771',
          "LinkCategoryCode": '401',
          "LinkName": "MDware生鮮環境（北関東/タブレット用）",
          "LinkUrl": "https://sapr-pmdw.aeonpeople.biz/mdw-skktportal/ssotabletsmain.do",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '772',
          "LinkCategoryCode": '401',
          "LinkName": "MDware生鮮環境（南関東/PC用）",
          "LinkUrl": "https://sapr-pmdw.aeonpeople.biz/mdw-smktportal/ssomain.do",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '773',
          "LinkCategoryCode": '401',
          "LinkName": "MDware生鮮環境（南関東/タブレット用）",
          "LinkUrl": "https://sapr-pmdw.aeonpeople.biz/mdw-smktportal/ssotabletsmain.do",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '774',
          "LinkCategoryCode": '401',
          "LinkName": "MDware生鮮環境（北陸信越/PC用）",
          "LinkUrl": "https://sapr-pmdw.aeonpeople.biz/mdw-shksportal/ssomain.do",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '775',
          "LinkCategoryCode": '401',
          "LinkName": "MDware生鮮環境（北陸信越/タブレット用）",
          "LinkUrl": "https://sapr-pmdw.aeonpeople.biz/mdw-shksportal/ssotabletsmain.do",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '776',
          "LinkCategoryCode": '401',
          "LinkName": "MDware生鮮環境（本部）",
          "LinkUrl": "https://sapr-pmdw.aeonpeople.biz/mdw-scomportal/ssomain.do",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '837',
          "LinkCategoryCode": '403',
          "LinkName": "CSC業務分析レポート(イオンリテール用)",
          "LinkUrl": "http://160.243.129.213/syataku/csc/csc_aeon_retail.html",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '973',
          "LinkCategoryCode": '999',
          "LinkName": "MDwareグロサリー環境（テスト環境）",
          "LinkUrl": "http://160.243.81.126:8081/mdw-aeonGRportal/tabletsmain.do",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '974',
          "LinkCategoryCode": '999',
          "LinkName": "MDwareデイリー・デリカ（テスト環境）",
          "LinkUrl": "http://160.243.13.100/mdw-testportal/ssomain.do",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '984',
          "LinkCategoryCode": '999',
          "LinkName": "生鮮ＭＤシステム（テスト環境）",
          "LinkUrl": "https://intro.seisenmd.jp/seisenMD/",
          "MandatoryFlg": true,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '998',
          "LinkCategoryCode": '101',
          "LinkName": "人事異動の際の手順書",
          "LinkUrl": "http://wwwaeon/cosmoshelp/index2.htm",
          "MandatoryFlg": true,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '212',
          "LinkCategoryCode": '101',
          "LinkName": "情報活用メニュー",
          "LinkUrl": "https://dwppwap01.aeon.jusco.co.jp/adams2/resources/jokatsu.jsp",
          "MandatoryFlg": false,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '337',
          "LinkCategoryCode": '101',
          "LinkName": "予算システム",
          "LinkUrl": "http://TSSV24.aeonpeople.biz/yosan/index.htm",
          "MandatoryFlg": false,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '392',
          "LinkCategoryCode": '403',
          "LinkName": "イオンアーカイブス",
          "LinkUrl": "https://portal.aeonpeople.biz:4040/sites/00000920004",
          "MandatoryFlg": false,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '429',
          "LinkCategoryCode": '403',
          "LinkName": "電話関連問合せ窓口「通信カウンター」",
          "LinkUrl": "http://ecmmsv01/dennwa/otokukcosmos.htm",
          "MandatoryFlg": false,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '459',
          "LinkCategoryCode": '403',
          "LinkName": "e革新（管理者）",
          "LinkUrl": "https://www.e-kakushin.com/login/",
          "MandatoryFlg": false,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '485',
          "LinkCategoryCode": '403',
          "LinkName": "イオン商品券発注システム",
          "LinkUrl": "https://bpo-aps01.aeonpeople.biz/adfs/ticket",
          "MandatoryFlg": false,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '488',
          "LinkCategoryCode": '403',
          "LinkName": "イオン商品券発注システム(共通ID以外)",
          "LinkUrl": "https://bpo-aps01.aeonpeople.biz/ticket/",
          "MandatoryFlg": false,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '522',
          "LinkCategoryCode": '401',
          "LinkName": "VOICE（お客さまの声）システム",
          "LinkUrl": "https://voice.aeon.biz/voicessl/",
          "MandatoryFlg": false,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '686',
          "LinkCategoryCode": '403',
          "LinkName": "WAON POINT管理システム（AR用）",
          "LinkUrl": "https://point.aeon.co.jp/cmkg/app/index.html#/cmKGcomm01?KAISHA_CD=0105&LOCATION=KG&GAMEN_ID=cmKGcomm01",
          "MandatoryFlg": false,
          "CommonLinkFlg": false
        },
        {
          "LinkCode": '948',
          "LinkCategoryCode": '401',
          "LinkName": "インタク利用状況確認",
          "LinkUrl": "http://kaihaiv/gmscktop/",
          "MandatoryFlg": false,
          "CommonLinkFlg": true
        },
        {
          "LinkCode": '687',
          "LinkCategoryCode": '403',
          "LinkName": "WAON POINT管理システム（AR用）",
          "LinkUrl": "https://point.aeon.co.jp/cmkg/app/index.html#/cmKGcomm01?KAISHA_CD=7900&LOCATION=KG&GAMEN_ID=cmKGcomm01",
          "MandatoryFlg": false,
          "CommonLinkFlg": false
        },
      ]
    }
  }

  return templateId === '7' ? parttimejobResponse : storemanagerResponse
}

