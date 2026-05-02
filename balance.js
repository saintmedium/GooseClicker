const BALANCE = {
    // ==========================================
    //  ЦЕНЫ УЛУЧШЕНИЙ
    //  base - начальная цена
    //  multiplier - экспоненциальный рост цены
    //  getCost(level) - функция расчёта цены
    // ==========================================
    upgrades: {
        // Улучшение "Сила клика"
        clickPower: {
            base: 10,               // Начальная цена (10 кристаллов)
            multiplier: 1.1,       // Множитель роста (каждый уровень дороже в 1.12 раз)
            getCost: function(level) {  // level - текущий уровень улучшения
                return Math.floor(this.base * Math.pow(this.multiplier, level - 1));
            }
        },
        // Улучшение "Автоклик"
        autoClick: {
            base: 25,              
            multiplier: 1.2,       
            getCost: function(level) {
                if (level === 0) return this.base;  // Для 0 уровня особая цена
                return Math.floor(this.base * Math.pow(this.multiplier, level));
            }
        },
        // Улучшение "Скорость автоклика"
        speed: {
            base: 50,               // Начальная цена (50 кристаллов)
            multiplier: 1.4,       // Множитель роста (каждый уровень дороже в 1.15 раз)
            getCost: function(level) {
                return Math.floor(this.base * Math.pow(this.multiplier, level));
            }
        },
        // Улучшение "Шанс крита"
        critChance: {
            base: 100,              // Начальная цена (100 кристаллов)
            multiplier: 1.5,       // Множитель роста (каждый уровень дороже в 1.18 раз)
            getCost: function(level) {
                return Math.floor(this.base * Math.pow(this.multiplier, level));
            }
        },
        // Улучшение "Сила крита"
        critPower: {
            base: 200,              // Начальная цена (200 кристаллов)
            multiplier: 1.5,        // Множитель роста (каждый уровень дороже в 1.2 раз)
            getCost: function(level) {
                return Math.floor(this.base * Math.pow(this.multiplier, level));
            }
        }
    },

    bonuses: {
        // Бонусы для "Силы клика"
        clickPower: [
            { minLevel: 1, bonus: 1 },       // Уровни 1-10: бонус +1
            { minLevel: 50, bonus: 2 },      // Уровни 11-49: бонус +2
            { minLevel: 100, bonus: 3 },     // Уровни 50-99: бонус +3
            { minLevel: 1000, bonus: 4 },    // Уровни 100-999: бонус +4
            { minLevel: 10000, bonus: 5 }    // Уровни 1000+: бонус +5
        ],
        // Бонусы для "Автоклика"
        autoClick: [
            { minLevel: 1, bonus: 1 },      // Уровни 1-10: бонус +1
            { minLevel: 50, bonus: 2 },     // Уровни 11-49: бонус +2
            { minLevel: 100, bonus: 3 },     // Уровни 50-99: бонус +3
            { minLevel: 1000, bonus: 4 },    // Уровни 100-999: бонус +4
            { minLevel: 10000, bonus: 5 }    // Уровни 1000+: бонус +5
        ]
    },

    
    gooseLevels: [
        { exp: 0, mult: 1.0, img: 'goose_01.png' },        // Уровень 1: x1.0 (начальный)
        { exp: 100, mult: 1.1, img: 'goose_02.png' },      // Уровень 2: x1.1 (100 опыта)
        { exp: 1000, mult: 1.2, img: 'goose_03.png' },      // Уровень 3: x1.2 (500 опыта)
        { exp: 10000, mult: 1.3, img: 'goose_04.png' },     // Уровень 4: x1.3 (1,000 опыта)
        { exp: 50000, mult: 1.4, img: 'goose_05.png' },     // Уровень 5: x1.4 (5,000 опыта)
        { exp: 100000, mult: 1.5, img: 'goose_06.png' },    // Уровень 6: x1.5 (10,000 опыта)
        { exp: 200000, mult: 1.6, img: 'goose_07.png' },    // Уровень 7: x1.6 (20,000 опыта)
        { exp: 500000, mult: 1.8, img: 'goose_08.png' },    // Уровень 8: x1.8 (50,000 опыта)
        { exp: 1000000, mult: 2.0, img: 'goose_09.png' }    // Уровень 9: x2.0 (100,000 опыта)
    ],

    
    autoClick: {
        baseInterval: 1000,     // 1000 мс = 1 секунда (начальная скорость)
        speedReduction: 10,     // Каждый уровень скорости уменьшает интервал на 10 мс
        minInterval: 100        // Минимальный интервал 100 мс = 0.1 секунды
    },

    
    crit: {
        baseMultiplier: 2.0,       // При крите урон умножается на x2.0 (на 0 уровне)
        powerIncrease: 0.01,       // Каждый уровень силы крита добавляет +0.01x к множителю
        chanceIncrease: 0.005,     // Каждый уровень шанса крита добавляет +0.5% шанса 
        maxChanceLevel: 100,       // Максимум 100 улучшений шанса крита (50% шанс)
        maxPowerLevel: 100,        // Максимум 100 улучшений силы крита (x3 на 100 уровне)
        maxSpeedLevel: 70          // Максимум 70 улучшений скорости автоклика
    },

    
    bursts: {
        // Буст "Критическая масса" (100% шанс крита)
        crit: {
            duration: 15000,    // Длится 15 секунд (15000 мс)
            cooldown: 120       // Перезарядка 180 секунд (3 минуты)
        },
        // Буст "Авто-шторм" (ускорение автоклика)
        speed: {
            duration: 10000,    // Длится 10 секунд (10000 мс)
            cooldown: 60,      // Перезарядка 120 секунд (2 минуты)
            multiplier: 2       // Ускоряет автоклик в 2 раза
        }
    },

    
    numberFormat: {
        K: 1000,                // 1,000+ = "1.000K"
        M: 1000000,             // 1,000,000+ = "1.000M"
        B: 1000000000,          // 1,000,000,000+ = "1.000B"
        decimals1: 1,           // 1 знак после запятой для тысяч
        decimals2: 2,           // 2 знака после запятой для миллионов
        decimals3: 3            // 3 знака после запятой для миллиардов
    }
};


function formatNumber(num) {
    // Если число больше миллиарда
    if (num >= BALANCE.numberFormat.B) {
        return (num / BALANCE.numberFormat.B).toFixed(BALANCE.numberFormat.decimals3) + 'B';
    }
    // Если число больше миллиона
    if (num >= BALANCE.numberFormat.M) {
        return (num / BALANCE.numberFormat.M).toFixed(BALANCE.numberFormat.decimals2) + 'M';
    }
    // Если число больше тысячи
    if (num >= BALANCE.numberFormat.K) {
        return (num / BALANCE.numberFormat.K).toFixed(BALANCE.numberFormat.decimals1) + 'K';
    }
    // Если число меньше 1000, показываем как есть
    return Math.floor(num).toString();
}
