describe('Instance Of', () => {
  it('should support', () => {
    class Employee {};
    class Manager {};

    const budi: Employee = new Employee();
    const eko: Manager = new Manager();

    expect(budi instanceof Employee).toBe(true);
    expect(eko instanceof Manager).toBe(true);

    expect(eko instanceof Employee).toBe(false);
    expect(budi instanceof Manager).toBe(false);
  });
});