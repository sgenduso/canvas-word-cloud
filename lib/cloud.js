var commonWords = [
  'i','a','about', 'an','and','are','as','at',
  'be', 'been','by','com','for', 'from','how','in',
  'is','it','not', 'of','on','or','that',
  'the','this','to','was', 'what','when','where', 'which',
  'who','will','with', 'www', 'http*','the',
  'we', 'us', 'our', 'ours',
  'they', 'them', 'their', 'he', 'him', 'his',
  'she', 'her', 'hers', 'it', 'its', 'you', 'yours', 'your',
  'has', 'have', 'would', 'could', 'should', 'shall',
  'can', 'may', 'if', 'then', 'else', 'but',
  'there', 'these', 'those'];

var wordRanks = function (text) {

  text = text.toLowerCase()
              .replace(/[\n,\r]/g,' ')
              .replace(/[^a-zA-Z ]/g, "")
              .replace(/\s{2,}/g, ' ')
              .split(' ');

var filtered = [];

text.forEach(function (e) {
    if (commonWords.indexOf(e)<0) {
      filtered.push(e);
    }
});

var wordCount = {};

filtered.forEach(function (e) {
  wordCount[e] = wordCount[e] || 0;
  wordCount[e] += 1;
});

  console.log(wordCount);
};

module.exports = {
  wordRanks: wordRanks
};
