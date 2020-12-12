class CoolSet extends Set {
  constructor() {
    super();
  }

  join(seperator) {
    return Array.from(this).join(seperator);
  }
}

const s = new CoolSet();
s.add(1);
s.add(2);
s.add(2);
console.log(s.join(","));
