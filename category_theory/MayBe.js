const MayBe = val => 
({
    val,
    isNull()
    {
        return val === undefined || val === null;
    },
    map(fn)
    {
        return this.isNull() ? MayBe.of(null) : MayBe.of(fn(val));
    }
});
MayBe.of = MayBe;