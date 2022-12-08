import { Temperature } from '../src';

describe("Temperature", () => {

  describe("ToString", () => {
    it("should return '5.48 F' if Temperature(5.48, Fahrenheit)", () => {
      const temp = new Temperature(5.48, 'F');
      expect(temp.ToString()).toBe("5.48 F");
    })
  });

  describe("ToFahrenheit", () => {
    it("should return the same temp if is Fahrenheit", () => {
      const temp = new Temperature(5.48, 'F');
      expect(temp.ToFahrenheit()).toEqual({ temp: 5.48, scale: 'F' });
    });
  });

  describe("ToCelsius", () => {
    it("should return -14.73C if receive 5.48F", () => {
      const temp = new Temperature(5.48, 'F');
      expect(temp.ToCelsius()).toEqual({ temp: -14.73, scale: 'C' });
    });
  });

  describe("ToKelvin", () => {
    it("should return the same temp if is Kelvin", () => {
      const temp = new Temperature(5.48, 'K');
      expect(temp.ToKelvin()).toEqual(temp);
    });
  });

  describe("Kelvin", () => {
    it("should throw error with 'Kelvin can't be zero or less' if receive 0K", () => {
      expect(() => { new Temperature(0, 'K') }).toThrowError("Kelvin can't be zero or less");
    });
	
	  it("should throw error with 'Kelvin can't be zero or less' if receive -5K", () => {
		  expect(() => { new Temperature(-5, 'K') }).toThrowError("Kelvin can't be zero or less");
	  });
  });

  describe("Add", () => {
    it("should return 91F if add 50F and 5C", () => {
      const tempA = new Temperature(5, 'C');
      const tempB = new Temperature(50, 'F');
      expect(tempB.Add(tempA)).toEqual({ temp: 91, scale: 'F' });
    });

    it("should return 275.15K if add 1K + 1C", () => {
      const tempA = new Temperature(1, 'C');
      const tempB = new Temperature(1, 'K');
      expect(tempB.Add(tempA)).toEqual({ temp: 275.15, scale: 'K' });
    });
  });

  describe("Subtract", () => {
    it("should return 9F if substract 50F and 5C", () => {
      const tempA = new Temperature(5, 'C');
      const tempB = new Temperature(50, 'F');
      expect(tempB.Subtract(tempA)).toEqual({ temp: 9, scale: 'F' });
    });

    it("should return 11.85K if substract 300K and 15C", () => {
      const tempA = new Temperature(15, 'C');
      const tempB = new Temperature(300, 'K');
      expect(tempB.Subtract(tempA)).toEqual({ temp: 11.85, scale: 'K' });
    });
  });

  describe("MultiplyBy", () => {
    it("should return 274.15K if multiply 1K by 1C", () => {
      const tempA = new Temperature(1, 'C');
      const tempB = new Temperature(1, 'K');
      expect(tempB.MultiplyBy(tempA)).toEqual({ temp: 274.15, scale: 'K' });
    });
  });

  describe("DivideBy", () => {
    it("should return 1.5C if divide 3C by 2C", () => {
      const tempA = new Temperature(3, 'C');
      const tempB = new Temperature(2, 'C');
      expect(tempA.DivideBy(tempB)).toEqual({ temp: 1.5, scale: 'C' });
    });
    
    it("should return 1K if divide 1K by -272.15C", () => {
      const tempA = new Temperature(-272.15, 'C');
      const tempB = new Temperature(1, 'K');
      expect(tempB.DivideBy(tempA)).toEqual({ temp: 1, scale: 'K' });
    });
  });
});