import encode from "./encode.js";


test("encode function should correctly encode a string with a positive key", () => {
  const inputString = "hello";
  const key = 2;

  const encodedResult = encode(inputString, key);

  expect(encodedResult).toBe("jgnnq");
});

test("encode function should correctly encode a string containing a space and new word", () => {
  const inputString = "hello world";
  const key = 2;

  const encodedResult = encode(inputString, key);

  expect(encodedResult).toBe("jgnnq yqtnf");
});

test("encode function should correctly encode a string with a negative key", () => {
  const inputString = "hello world";
  const key = -2;

  const encodedResult = encode(inputString, key);

  expect(encodedResult).toBe("fcjjm umpjb");
});

test("encode function should correctly encode a string with a key of zero", () => {
  const inputString = "hello world";
  const key = 0;

  const encodedResult = encode(inputString, key);

  expect(encodedResult).toBe("hello world");
});

test("encode function should correctly encode a string with mixed case", () => {
  const inputString = "HeLlO wOrLd";
  const key = 2;

  const encodedResult = encode(inputString, key);

  expect(encodedResult).toBe("JgNnQ yQtNf");
});

test('encode function should correctly encode a string with all Unicode properties and "^_`{|}~<=>+$" characters', () => {
  const inputString = "hello world!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  const key = 2;

  const encodedResult = encode(inputString, key);

  expect(encodedResult).toBe("jgnnq yqtnf!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~");
});

test("encode function should correctly encode a string with a positive key which wraps around the English alphabet", () => {
  const inputString = "zzzz";
  const key = 2;

  const encodedResult = encode(inputString, key);

  expect(encodedResult).toBe("bbbb");
});

test("encode function should correctly encode a string with a negative key which wraps around the English alphabet", () => {
  const inputString = "aaaa";
  const key = -2;

  const encodedResult = encode(inputString, key);

  expect(encodedResult).toBe("yyyy");
});

test("encode function should not change the placeholder text if no characters are entered in the user textbox", () => {
  const inputString = "";
  const key = -2;

  const encodedResult = encode(inputString, key);

  expect(encodedResult).toBe("");
});

test("encode function should should correctly encode a string with 193 words", () => {
  const inputString =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit velit architecto praesentium officia, nisi atque error accusantium sed unde porro quasi illum minima neque, expedita qui nostrum provident deleniti quia similique dignissimos. Quo aliquam, rerum veniam eos, neque voluptate reprehenderit velit, provident vero explicabo odit quasi quam adipisci minus placeat modi nihil soluta repudiandae est delectus ab quia. Doloribus aliquam accusantium iure? At, cumque aspernatur architecto neque officiis omnis molestias doloribus harum perferendis nemo repudiandae quam praesentium illum enim, voluptates vel pariatur aliquam magnam a illo repellat perspiciatis! Voluptate quis amet harum aliquid id sit, dolores doloribus quia voluptas ipsum accusamus dolore cum aspernatur possimus voluptatum quisquam itaque magnam quae in officiis similique asperiores quas incidunt quasi? Soluta iure, exercitationem alias est quod, ad nihil tenetur saepe quasi, incidunt porro sit dolores adipisci minima animi quis itaque ipsum! Quasi adipisci, similique illo fugit earum culpa fugiat, dolore provident quidem explicabo nesciunt, ullam facere. Placeat soluta nobis sapiente consectetur earum nulla sequi ipsa! Incidunt eaque ducimus placeat consequatur, eum aliquid non odio eos nulla voluptates eius sed! Ipsa sunt quam similique provident harum ducimus sequi.";
  const key = 2;

  const encodedResult = encode(inputString, key);

  expect(encodedResult).toBe(
    "Nqtgo kruwo fqnqt ukv cogv eqpugevgvwt cfkrkukekpi gnkv. Tgrtgjgpfgtkv xgnkv ctejkvgevq rtcgugpvkwo qhhkekc, pkuk cvswg gttqt ceewucpvkwo ugf wpfg rqttq swcuk knnwo okpkoc pgswg, gzrgfkvc swk pquvtwo rtqxkfgpv fgngpkvk swkc ukoknkswg fkipkuukoqu. Swq cnkswco, tgtwo xgpkco gqu, pgswg xqnwrvcvg tgrtgjgpfgtkv xgnkv, rtqxkfgpv xgtq gzrnkecdq qfkv swcuk swco cfkrkuek okpwu rncegcv oqfk pkjkn uqnwvc tgrwfkcpfcg guv fgngevwu cd swkc. Fqnqtkdwu cnkswco ceewucpvkwo kwtg? Cv, ewoswg curgtpcvwt ctejkvgevq pgswg qhhkekku qopku oqnguvkcu fqnqtkdwu jctwo rgthgtgpfku pgoq tgrwfkcpfcg swco rtcgugpvkwo knnwo gpko, xqnwrvcvgu xgn rctkcvwt cnkswco ocipco c knnq tgrgnncv rgturkekcvku! Xqnwrvcvg swku cogv jctwo cnkswkf kf ukv, fqnqtgu fqnqtkdwu swkc xqnwrvcu kruwo ceewucowu fqnqtg ewo curgtpcvwt rquukowu xqnwrvcvwo swkuswco kvcswg ocipco swcg kp qhhkekku ukoknkswg curgtkqtgu swcu kpekfwpv swcuk? Uqnwvc kwtg, gzgtekvcvkqpgo cnkcu guv swqf, cf pkjkn vgpgvwt ucgrg swcuk, kpekfwpv rqttq ukv fqnqtgu cfkrkuek okpkoc cpkok swku kvcswg kruwo! Swcuk cfkrkuek, ukoknkswg knnq hwikv gctwo ewnrc hwikcv, fqnqtg rtqxkfgpv swkfgo gzrnkecdq pguekwpv, wnnco hcegtg. Rncegcv uqnwvc pqdku ucrkgpvg eqpugevgvwt gctwo pwnnc ugswk kruc! Kpekfwpv gcswg fwekowu rncegcv eqpugswcvwt, gwo cnkswkf pqp qfkq gqu pwnnc xqnwrvcvgu gkwu ugf! Kruc uwpv swco ukoknkswg rtqxkfgpv jctwo fwekowu ugswk."
  );
});
