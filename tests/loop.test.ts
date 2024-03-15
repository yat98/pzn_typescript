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

  it('should support for while loop', () => {
    let counter: number = 0;
    const logSpy = jest.spyOn(global.console, 'log');

    while(counter < 10) {
      console.log(counter);
      counter++;
    }

    expect(logSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledTimes(10);
  });

  it('should support do while loop', () => {
    let counter: number = 10;
    jest.clearAllMocks();
    const logSpy = jest.spyOn(global.console, 'log');

    do {
      console.log(counter);
      counter++;
    } while(counter < 10);

    expect(logSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledTimes(1);
  });
});