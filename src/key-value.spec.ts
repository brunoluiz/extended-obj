import { KeyValue } from './index';

describe('KeyValue', () => {
  it('should build extended object and work as normal object', () => {
    const obj = KeyValue({ FOO: 'BAR' });
    expect(obj.FOO).toBe('BAR');
  });

  it('should return key on valid getByValue()', () => {
    const obj = KeyValue({ FOO: 'BAR' });
    expect(obj.getByValue('BAR')).toBe('FOO');
  });

  it('should return undefined on invalid getByValue()', () => {
    const obj = KeyValue({ FOO: 'BAR' });
    expect(obj.getByValue('X')).toBe(undefined);
  });

  it('should return value on valid get()', () => {
    const obj = KeyValue({ FOO: 'BAR' });
    expect(obj.get('FOO')).toBe('BAR');
  });

  it('should return key on invalid get()', () => {
    const obj = KeyValue({ FOO: 'BAR' });
    expect(obj.get('X')).toBe(undefined);
  });

  it('should return all values', () => {
    const obj = KeyValue({ FOO: 'BAR', 20: 'Y' });
    expect(obj.values()).toContain('BAR');
    expect(obj.values()).toContain('Y');
  });

  it('should return all keys', () => {
    const obj = KeyValue({ FOO: 'BAR', 20: 'Y' });
    expect(obj.keys()).toContain('FOO');
    expect(obj.keys()).toContain('20');
  });

  it('should return all entries', () => {
    const obj = KeyValue({ FOO: 'BAR', X: 'Y' });
    expect(obj.entries()).toEqual([['FOO', 'BAR'], ['X', 'Y']]);
  });

  it('should return JSON string', () => {
    const obj = KeyValue({ FOO: 'BAR', X: 'Y' });
    expect(obj.toJSON()).toEqual(JSON.stringify({ FOO: 'BAR', X: 'Y' }));
  });
});
