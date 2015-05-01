var chart = c3.generate({
    data: {
        columns: [
            ['data1', 30, 200, 100, 400, 150, 250]
        ],
        type: 'bar'
    },
    bar: {
        width: {
            ratio: 0.5 // this makes bar width 50% of length between ticks
        }
        // or
        //width: 100 // this makes bar width 100px
    },
    axis: {
        x: {
            type: 'category',
            categories: ['cat1', 'cat2', 'cat3', 'cat4', 'cat5', 'cat6']
        }
    }
});
