export enum OwOmodes {
  low,
  medium,
  high
}


export class OwOifier {
  constructor() { }

  OwOify(text: String, level: OwOmodes = OwOmodes.high) {
    text = text.replaceAll("/(:?R|L)/g", "W");
    text = text.replaceAll("/(:?r|l)/g", "w");

    if (level ===  OwOmodes.medium || level === OwOmodes.high) {
      text = text.replaceAll("/n([aeiou])/g", "ny$1");
      text = text.replaceAll("/N([aeiou])/g", "Ny$1");
      text = text.replaceAll("/N([AEIOU])/g", "NY$1");
      text = text.replaceAll("z", "z~ ");
    }

    if (level === OwOmodes.high) {
      text = text.replaceAll("OVE", "UV");
      text = text.replaceAll("ove", "uv");

      const faces = ["(o´∀`o)", "(#｀ε´)", "(๑•̀ㅁ•́๑)✧", "(*≧m≦*)", "(・`ω´・)", "UwU", "OwO", ">w<", "｡ﾟ( ﾟ^∀^ﾟ)ﾟ｡", "ヾ(｀ε´)ﾉ",
        "(´• ω •`)", "o(>ω<)o", "(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧", "(⁀ᗢ⁀)", "(￣ε￣＠)", "( 〃▽〃)", "(o^ ^o)", "ヾ(*'▽'*)"];

      text = text.replaceAll("!", ` ${faces[Math.floor(Math.random() * (faces.length - 1))]} `);

      text = text
        .replaceAll("nyzzwes", "nuzzles~")
        .replaceAll("ahh", "murr")
        .replaceAll("awesome", "pawsome")
        .replaceAll("awfuw", "pawful")
        .replaceAll("bite", "nuzzles~")
        .replaceAll("bite", "nom")
        .replaceAll("buwge", "bulgy-wulgy")
        .replaceAll("butthowe", "tailhole")
        .replaceAll("cewebwity", "popufur")
        .replaceAll("cheese", "sergal")
        .replaceAll("chiwd", "cub")
        .replaceAll("computew", "protogen")
        .replaceAll("wobot", "protogen")
        .replaceAll("cybowg", "protogen")
        .replaceAll("cum", "cummy wummy~")
        .replaceAll("disease", "pathOwOgen")
        .replaceAll("dog", "good boy")
        .replaceAll("dwagon", "derg")
        .replaceAll("eat", "vore")
        .replaceAll("fuck", "fluff")
        .replaceAll("fathew", "daddy")
        .replaceAll("foot", "footpaw")
        .replaceAll("fow", "fur")
        .replaceAll("hand", "paw")
        .replaceAll("heww", "hecc")
        .replaceAll("hyenya", "yeen")
        .replaceAll("kiss", "lick")
        .replaceAll("wmao", "hehe~")
        .replaceAll("mouth", "maw")
        .replaceAll("nyaughty", "knotty")
        .replaceAll("nyot", "knot")
        .replaceAll("pewfect", "purrfect")
        .replaceAll("pewsona", "fursona")
        .replaceAll("pewvewt", "furvert")
        .replaceAll("pown", "yiff")
        .replaceAll("shout", "awoo")
        .replaceAll("swut", "fox")
        .replaceAll("souwce", "saunce")
        .replaceAll("stwaight", "gay")
        .replaceAll("tawe", "tail")
        .replaceAll("the", "teh")
        .replaceAll("this", "dis")
        .replaceAll("toe", "toe been")
        .replaceAll("with", "wif")
        .replaceAll("you", "chu")
        .replaceAll("youw", "ur")
        .replaceAll(",", "~")
        .replaceAll(";", "~")
        .replaceAll(":)", ":3")
        .replaceAll(":O", "OwO")
        .replaceAll(":o", "owo")
        .replaceAll(":D", "UwU")
        .replaceAll("XD", "X3")
        .replaceAll("xD", "x3")
        .replaceAll("?", " uwu?");

    }


    return text;
  }

}