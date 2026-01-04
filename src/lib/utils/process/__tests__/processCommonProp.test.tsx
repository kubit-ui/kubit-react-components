import { describe, expect, it } from 'vitest';

import {
  processCommonProp,
  processIconProp,
  processTextProp,
} from '../processCommonProp';

describe('processCommonProp', () => {
  describe('processIconProp (icon processing)', () => {
    it('should convert string to icon object', () => {
      const result = processIconProp('home');
      expect(result).toEqual({ icon: 'home' });
    });

    it('should return object as-is when icon is an object', () => {
      const iconObject = { icon: 'settings', size: 'large' };
      const result = processIconProp(iconObject);
      expect(result).toEqual(iconObject);
    });

    it('should return empty object when icon is undefined', () => {
      const result = processIconProp();
      expect(result).toEqual({});
    });

    it('should handle complex icon objects', () => {
      const iconObject = {
        color: 'red',
        icon: 'custom',
        size: 'medium',
      };
      const result = processIconProp(iconObject);
      expect(result).toEqual(iconObject);
    });
  });

  describe('processTextProp (text processing)', () => {
    it('should convert string to children object', () => {
      const result = processTextProp('Hello, world!');
      expect(result).toEqual({ children: 'Hello, world!' });
    });

    it('should truncate text when maxLength is provided', () => {
      const result = processTextProp('Hello, world!', 5);
      expect(result).toEqual({ children: 'Hello' });
    });

    it('should handle React elements', () => {
      const element = <span>Hello</span>;
      const result = processTextProp(element);
      expect(result).toEqual({ children: element });
    });

    it('should extract content property from object', () => {
      const textObject = { content: 'Hello', style: { color: 'red' } };
      const result = processTextProp(textObject);
      expect(result).toEqual({
        children: 'Hello',
        content: 'Hello',
        style: { color: 'red' },
      });
    });

    it('should truncate extracted content when maxLength is provided', () => {
      const textObject = { content: 'Hello, world!', style: { color: 'red' } };
      const result = processTextProp(textObject, 5);
      expect(result).toEqual({
        children: 'Hello',
        content: 'Hello, world!',
        style: { color: 'red' },
      });
    });

    it('should return object with null children when text is undefined', () => {
      const result = processTextProp();
      expect(result).toEqual({ children: null });
    });

    it('should handle text object without content property', () => {
      const textObject = { children: 'Direct children', id: 'test' };
      const result = processTextProp(textObject);
      expect(result).toEqual(textObject);
    });

    it('should not truncate non-string content', () => {
      const element = <span>Hello</span>;
      const textObject = { content: element };
      const result = processTextProp(textObject, 5);
      expect(result).toEqual({
        children: element,
        content: element,
      });
    });
  });

  describe('processCommonProp (generic processing)', () => {
    it('should handle icon mode with custom property name', () => {
      const result = processCommonProp('home', { propertyName: 'icon' });
      expect(result).toEqual({ icon: 'home' });
    });

    it('should handle children mode (default)', () => {
      const result = processCommonProp('Hello');
      expect(result).toEqual({ children: 'Hello' });
    });

    it('should truncate string in any mode', () => {
      const result = processCommonProp('Hello, world!', { maxLength: 5 });
      expect(result).toEqual({ children: 'Hello' });
    });

    it('should respect allowReactElements flag', () => {
      const element = <span>Test</span>;
      const resultWithElements = processCommonProp(element, {
        allowReactElements: true,
      });
      expect(resultWithElements).toEqual({ children: element });

      // When allowReactElements is false, React elements are treated as objects
      const resultWithoutElements = processCommonProp(element, {
        allowReactElements: false,
      });
      expect(resultWithoutElements).toBe(element);
    });

    it('should respect extractContent flag', () => {
      const obj = { content: 'Test', extra: 'data' };

      const resultWithExtract = processCommonProp(obj, {
        extractContent: true,
      });
      expect(resultWithExtract).toEqual({
        children: 'Test',
        content: 'Test',
        extra: 'data',
      });

      const resultWithoutExtract = processCommonProp(obj, {
        extractContent: false,
      });
      expect(resultWithoutExtract).toEqual(obj);
    });

    it('should return empty object for icon mode when undefined', () => {
      const result = processCommonProp(undefined, { propertyName: 'icon' });
      expect(result).toEqual({});
    });

    it('should return object with null children for children mode when undefined', () => {
      const result = processCommonProp(undefined, {
        propertyName: 'children',
      });
      expect(result).toEqual({ children: null });
    });

    it('should handle null input', () => {
      const result = processCommonProp(null);
      expect(result).toEqual({ children: null });
    });

    it('should handle empty string', () => {
      const result = processCommonProp('');
      expect(result).toEqual({ children: '' });
    });

    it('should handle zero as content', () => {
      const result = processCommonProp(
        { content: 0 },
        { extractContent: true },
      );
      expect(result).toEqual({ children: 0, content: 0 });
    });
  });

  describe('backward compatibility', () => {
    it('should match processIcon behavior', () => {
      expect(processIconProp('home')).toEqual({ icon: 'home' });
      expect(processIconProp({ icon: 'settings', size: 'large' })).toEqual({
        icon: 'settings',
        size: 'large',
      });
      expect(processIconProp()).toEqual({});
    });

    it('should match processText behavior', () => {
      expect(processTextProp('Hello, world!')).toEqual({
        children: 'Hello, world!',
      });
      expect(processTextProp('Hello, world!', 5)).toEqual({
        children: 'Hello',
      });
      expect(processTextProp()).toEqual({ children: null });

      const element = <span>Hello</span>;
      expect(processTextProp(element)).toEqual({ children: element });

      const obj = { content: 'Hello', style: { color: 'red' } };
      expect(processTextProp(obj, 3)).toEqual({
        children: 'Hel',
        content: 'Hello',
        style: { color: 'red' },
      });
    });
  });
});
