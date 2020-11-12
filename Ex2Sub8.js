const human = Object.create({}, {
    fullName: {
        set: function (value) {
            [this.firstName, this.lastName] = value.split(' ');
        },
        get() {
            return `${this.firstName} ${this.lastName}`
        }
    },
    dateOfBirth: {
        set: function (value) {
            [this.day, this.month, this.year] = value.split('.');
        },
        get() {
            return `${this.day}.${this.month}.${this.year}`
        }
    },
    age: {
        get() {
            return new Date().getFullYear() - this.year;
        }
    }
})

human.fullName = 'Petr Borisov';
human.dateOfBirth = '23.05.1985'
console.log(human);