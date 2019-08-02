export function main (el, service, imEntity, _state, _config, navigate) {
  // 1

  var button1 = document.createElement('button');
  button1.type = "button";
  button1.onclick = function(event) {
    navigate('report', {type: 'Gene', id: 1460425});
  };
  button1.appendChild(document.createTextNode("Local report for flymine/default"));

  el.appendChild(button1);

  // 2

  var button2 = document.createElement('button');
  button2.type = "button";
  button2.onclick = function(event) {
    navigate('report', {type: 'Gene', id: 1018204}, 'humanmine');
  };
  button2.appendChild(document.createTextNode("External report (humanmine)"));

  el.appendChild(button2);

  // 3

  var myQuery = {
    name: 'Gene_Protein',
    title: 'Gene --> Proteins.',
    comment: 'Added 26OCT2010: ML',
    description:
    'For a given Gene (or List of Genes) returns the corresponding Protein(s) products.',
    from: 'Gene',
    select: [
      'primaryIdentifier',
      'symbol',
      'proteins.primaryIdentifier',
      'proteins.primaryAccession',
      'proteins.name',
      'proteins.length'
    ],
    orderBy: [
      {
        path: 'primaryIdentifier',
        direction: 'ASC'
      }
    ],
    where: [
      {
        path: 'Gene.id',
        op: '=',
        value: 1018204
      }
    ]
  };

  var button3 = document.createElement('button');
  button3.type = "button";
  button3.onclick = function(event) {
    navigate('query', myQuery);
  };
  button3.appendChild(document.createTextNode("Local query"));

  el.appendChild(button3);

  // 4

  var myQuery = {
    "title": "Sumsum",
    "from": "Gene",
    "select": [
      "Gene.symbol"
    ],
    "constraintLogic": "(A)",
    "where": [
      {
        "path": "Gene.symbol",
        "op": "CONTAINS",
        "value": "1287",
        "code": "A"
      }
    ]
  };

  var button4 = document.createElement('button');
  button4.type = "button";
  button4.onclick = function(event) {
    navigate('query', myQuery, "flymine");
  };
  button4.appendChild(document.createTextNode("External query (flymine)"));

  el.appendChild(button4);
}
