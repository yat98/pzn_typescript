export class Counter {
	protected counter: number = 0;
	
	public increment() {
			this.counter++;
	}
	
	public getCounter() {
		return this.counter;
	}
}

export class DoubleCounter extends Counter {
	public increment() {
			this.counter+=2;
	}
}