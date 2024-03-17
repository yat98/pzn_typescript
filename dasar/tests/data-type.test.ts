describe('Data Type', () => {
  it('should must declare', () => {
    // let name = "Hidayat";
    // Error
    // name = 100;

    const name: String = "Hidayat";
    const balance: Number = 100;
    const isVip: Boolean = false;

    console.info(name);
    console.info(balance);
    console.info(isVip);

    expect(typeof name).toBe('string');
    expect(typeof balance).toBe('number');
    expect(typeof isVip).toBe('boolean');
  });
});