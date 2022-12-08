
function round(num: number): number {
    return +(Math.round(+(num + "e+2")) + "e-2");
};

export class Temperature {
    constructor(
        public temp: number,
        public readonly scale: "F" | "C" | "K"
    ) {
        if (temp <= 0 && scale == "K")
        throw new Error("Kelvin can't be zero or less");
    }

    Add(temperature: Temperature): Temperature {
        if (this.scale == temperature.scale)
            return new Temperature(round(this.temp + temperature.temp), this.scale);

        if (this.scale == "C")
            return new Temperature(round(this.temp + temperature.ToCelsius().temp), this.scale);

        if (this.scale == "F")
            return new Temperature(round(this.temp + temperature.ToFahrenheit().temp), this.scale);

        return new Temperature(round(this.temp + temperature.ToKelvin().temp), this.scale);
    }

    Subtract(temperature: Temperature): Temperature {
        if (this.scale == temperature.scale)
            return new Temperature(round(this.temp - temperature.temp), this.scale);

        if (this.scale == "C")
            return new Temperature(round(this.temp - temperature.ToCelsius().temp), this.scale);

        if (this.scale == "F")
            return new Temperature(round(this.temp - temperature.ToFahrenheit().temp), this.scale);

        return new Temperature(round(this.temp - temperature.ToKelvin().temp), this.scale);
    }

    MultiplyBy(temperature: Temperature): Temperature {
        if (this.scale == temperature.scale)
            return new Temperature(round(this.temp * temperature.temp), this.scale);

        if (this.scale == "C")
            return new Temperature(round(this.temp * temperature.ToCelsius().temp), this.scale);

        if (this.scale == "F")
            return new Temperature(round(this.temp * temperature.ToFahrenheit().temp), this.scale);

        return new Temperature(round(this.temp * temperature.ToKelvin().temp), this.scale);
    }

    DivideBy(temperature: Temperature): Temperature {
        if (this.scale == temperature.scale)
            return new Temperature(round(this.temp / temperature.temp), this.scale);

        if (this.scale == 'C')
            return new Temperature(round(this.temp / temperature.ToCelsius().temp), this.scale);

        if (this.scale == "F")
            return new Temperature(round(this.temp / temperature.ToFahrenheit().temp), this.scale);

        return new Temperature(round(this.temp / temperature.ToKelvin().temp), this.scale);
    }

    ToFahrenheit(): Temperature {
        if (this.scale == 'C') {
            const fahrenheit = round((this.temp*9/5)+32);
            return new Temperature(fahrenheit, 'F');
        }

        if (this.scale == 'K') {
            const fahrenheit = round((this.temp-273.15)*(9/5)+32);
            return new Temperature(fahrenheit, 'F');
        }

        return this;
    }

    ToCelsius(): Temperature {
        if (this.scale == 'F') {
            const celsius = round((this.temp-32)*5/9);
            return new Temperature(celsius, 'C');
        }

        if (this.scale == 'K') {
            const celsius = round(this.temp-273.15);
            return new Temperature(celsius, 'C');
        }

        return this;
    }

    ToKelvin(): Temperature {
        if (this.scale == 'C') {
            const kelvin = round(this.temp+273.15);
            return new Temperature(kelvin, 'K');
        }

        if (this.scale == 'F') {
            const kelvin = round((this.temp-32)*(5/9)+273.15);
            return new Temperature(kelvin, 'K');
        }

        return this;
    }

    
    ToString() {
        return `${this.temp} ${this.scale}`;
    }
};