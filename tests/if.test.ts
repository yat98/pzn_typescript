describe('If Statement', () => {
  it('should support if statement', () => {
    const examValue = 90;
    const infoSpy = jest.spyOn(global.console, 'info');

    if(examValue > 80) {
      console.info('Good');
    } else if(examValue > 60) {
      console.info('Not Bad');	
    } else {
      console.info('Try Again');		
    }

    expect(infoSpy).toHaveBeenCalled();
    expect(infoSpy).toHaveBeenCalledWith('Good');
  });
});