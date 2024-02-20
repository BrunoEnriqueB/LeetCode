# Longest Common Prefix

Explicando o código:

A ideia aqui é verificar o maior prefixo comum entre um array de palavras. Por exemplo:

<b>Input</b> = ["flower","flow","flight"];<br>
<b>Output</b> = "fl"<br>

<b>Input</b> = ["medico","medo","mesmo"];<br>
<b>Output</b> = "me"<br>

<b>Input</b> = ["dog","racecar","car"];<br>
<b>Output</b> = ""<br>

O desafio consiste em achar a maior quantidade de letras em <b>COMUM</b> no início
de todas as palavras do array.

Se existe apenas uma palavra no array, então o resultado será a própria palavra:

<b>Input</b> = ["flower"];</br>
<b>Output</b> = "flower;</br>

Após isso, assumindo que o array terá mais de uma palavra, podemos inicializar nossa saída com a primeira palavra do array:

<code>let substring = strs[0]</code>

Feito isso, vamos comparar as palavras seguintes:

<code>for (let i = 1; i < strs.length; i++)</code>

Agora, precisamos comparar se a palavra atual tem alguma semelhança com nossa palavra inicial,
se não houver, vamos diminuir o tamanho das duas palavras e tentar novamente

```javascript
while (true) {
  if (substring.length === 0) return '';
  const minLength = Math.min(actual.length, substring.length);
  if (actual.slice(0, minLength) === substring.slice(0, minLength)) {
    substring = actual.slice(0, minLength);
    break;
  }
  substring = substring.slice(0, substring.length - 1);
}
```

No final, se restou alguma igualdade entre string, retornamos

<code>return substring</code>
