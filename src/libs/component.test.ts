import { mapModifiers } from './component';

describe('libs/component', () => {
  describe('mapModifiers', () => {
    it('should return composed class name', () => {
      expect(mapModifiers('a-class-name')).toBe('a-class-name');
      expect(mapModifiers('a-class-name', 'mod')).toBe('a-class-name a-class-name--mod');
      expect(mapModifiers('a-class-name', 'mod1', 'mod2')).toBe('a-class-name a-class-name--mod1 a-class-name--mod2');
      expect(mapModifiers('a-class-name', ['mod1', 'mod2'])).toBe('a-class-name a-class-name--mod1 a-class-name--mod2');
      expect(mapModifiers('a-class-name', 'mod1', ['mod2', 'mod3'], 'mod4')).toBe(
        'a-class-name a-class-name--mod1 a-class-name--mod2 a-class-name--mod3 a-class-name--mod4'
      );
      expect(mapModifiers('a-class-name', false, undefined, null)).toBe('a-class-name');
      expect(mapModifiers('a-class-name', false, undefined, 'mod', null)).toBe('a-class-name a-class-name--mod');
      expect(mapModifiers('a-class-name', false, [undefined, 'mod1'], 'mod2', null)).toBe(
        'a-class-name a-class-name--mod1 a-class-name--mod2'
      );
    });
  });
});
