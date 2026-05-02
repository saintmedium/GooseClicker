const BALANCE = {
    
    upgrades: {
        clickPower: {
            base: 10,
            multiplier: 1.1,
            getCost: function(level) {
                return Math.floor(this.base * Math.pow(this.multiplier, level - 1));
            }
        },
        autoClick: {
            base: 25,
            multiplier: 1.2,
            getCost: function(level) {
                if (level === 0) return this.base;
                return Math.floor(this.base * Math.pow(this.multiplier, level));
            }
        },
        speed: {
            base: 50,
            multiplier: 1.4,
            getCost: function(level) {
                return Math.floor(this.base * Math.pow(this.multiplier, level));
            }
        },
        critChance: {
            base: 100,
            multiplier: 1.35,
            getCost: function(level) {
                return Math.floor(this.base * Math.pow(this.multiplier, level));
            }
        },
        critPower: {
            base: 200,
            multiplier: 1.35,
            getCost: function(level) {
                return Math.floor(this.base * Math.pow(this.multiplier, level));
            }
        }
    },

    bonuses: {
        clickPower: [
            { minLevel: 1, bonus: 1 },
            { minLevel: 50, bonus: 2 },
            { minLevel: 100, bonus: 3 },
            { minLevel: 1000, bonus: 4 },
            { minLevel: 10000, bonus: 5 }
        ],
        autoClick: [
            { minLevel: 1, bonus: 1 },
            { minLevel: 50, bonus: 2 },
            { minLevel: 100, bonus: 3 },
            { minLevel: 1000, bonus: 4 },
            { minLevel: 10000, bonus: 5 }
        ]
    },

    gooseLevels: [
        { exp: 0, mult: 1.0, img: 'goose_01.png' },
        { exp: 100, mult: 1.1, img: 'goose_02.png' },
        { exp: 1000, mult: 1.2, img: 'goose_03.png' },
        { exp: 10000, mult: 1.3, img: 'goose_04.png' },
        { exp: 50000, mult: 1.4, img: 'goose_05.png' },
        { exp: 100000, mult: 1.5, img: 'goose_06.png' },
        { exp: 200000, mult: 1.6, img: 'goose_07.png' },
        { exp: 500000, mult: 1.8, img: 'goose_08.png' },
        { exp: 1000000, mult: 2.0, img: 'goose_09.png' }
    ],

    autoClick: {
        baseInterval: 1000,
        speedReduction: 10,
        minInterval: 100
    },

    crit: {
        baseMultiplier: 2.0,
        powerIncrease: 0.01,
        chanceIncrease: 0.005,
        maxChanceLevel: 100,
        maxPowerLevel: 100,
        maxSpeedLevel: 70
    },

    bursts: {
        crit: {
            duration: 15000,
            cooldown: 120
        },
        speed: {
            duration: 10000,
            cooldown: 60,
            multiplier: 2
        }
    },

    numberFormat: {
        K: 1000,
        M: 1000000,
        B: 1000000000,
        decimals1: 1,
        decimals2: 2,
        decimals3: 3
    }
};

function formatNumber(num) {
    if (num >= BALANCE.numberFormat.B) {
        return (num / BALANCE.numberFormat.B).toFixed(BALANCE.numberFormat.decimals3) + 'B';
    }
    if (num >= BALANCE.numberFormat.M) {
        return (num / BALANCE.numberFormat.M).toFixed(BALANCE.numberFormat.decimals2) + 'M';
    }
    if (num >= BALANCE.numberFormat.K) {
        return (num / BALANCE.numberFormat.K).toFixed(BALANCE.numberFormat.decimals1) + 'K';
    }
    return Math.floor(num).toString();
}
