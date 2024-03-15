describe('Loop', () => {
  it('should support for loop', () => {
    const names: string[] = ['Hidayat', 'Chandra'];
    const infoSpy = jest.spyOn(global.console, 'info');
    
    for(let i = 0; i < names.length; i++) {
      console.info(names[i]);
    }
    expect(infoSpy).toHaveBeenCalled();
    expect(infoSpy).toHaveBeenCalledTimes(2);

    for(const name of names) {
      console.info(name);
    }
    expect(infoSpy).toHaveBeenCalled();
    expect(infoSpy).toHaveBeenCalledTimes(4);

    for(const index in names) {
      console.info(names[index]);
    }
    expect(infoSpy).toHaveBeenCalled();
    expect(infoSpy).toHaveBeenCalledTimes(6);
  });
});