Vue.filter('jsonToTSV', function (value) {
	var tsv = TSV.stringify(value);

	return tsv;
});
