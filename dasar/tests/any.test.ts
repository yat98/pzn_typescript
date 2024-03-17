describe('Any', () => {
  it('should support any', () => {
    const person: any = {
      id: 1,
      name: 'Hidayat'
    };

    expect(person.id).toBe(1);

    person.id = 'Bs3r417';

    expect(person.id).toBe('Bs3r417');
  });
});