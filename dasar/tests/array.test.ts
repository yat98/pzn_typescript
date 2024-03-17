describe('Array', () => {
  it('should same with javascript', () => {
    const names: string[] = ['andi','asep','dadang'];
    const values: number[] = [90,51,22];

    expect(names).toEqual(['andi','asep','dadang']);
    expect(values).toEqual([90,51,22]);
  });

  it('should support readonly array', () => {
    const hobbies: ReadonlyArray<String> = ['reading', 'riding'];

    // Error
    // hobbies[0] = 'running';

    expect(hobbies[0]).toBe('reading');
  });

  it('should support tupple', () => {
    const names: readonly[String, String, Number] = ['Hidayat', 'Chandra', 100];

    // Error
    // names[2] = 'Cannot Change';

    expect(names[2]).toBe(100);
  });
});