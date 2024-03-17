describe('Object', () => {
  it('should support in typescript', () => {
    const person: {id: String, name: String} = {
      id: 'uy3Acz1',
      name: 'Hidayat',
    };

    expect(person).toHaveProperty('id');
    expect(person).toHaveProperty('name');

    person.name = 'Chandra';
    // Error
    // person.description = 'Lorem ipsum';
    expect(person.name).toBe('Chandra');
  });
});