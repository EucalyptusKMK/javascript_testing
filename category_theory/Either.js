// failure
const Left = val =>
({
    val,
    map(fn)
    {
        return Left.of(val);
    },
    matchWith(context) // {left : () =>, right : () => }
    {
        return context.left(val);
    },
    valueOf()
    {
        return val;
    }
});
Left.of = Left;

// success
const Right = val => 
({
    val,
    map(fn)
    {
        return Right.of(fn(val));
    },
    matchWith(context)
    {
        return context.right(val);
    },
    valueOf()
    {
        return val;
    }
});
Right.of = Right;