<script>
	export let data;
    let superData = {};
    let product1 = data.product.then(result => {
        // console.log('promiseBresult') ;
        // console.log(result) ;

        superData.id = result.id;
        superData.name = result.name;
        superData.weight = result.weight;

        return (result) ;
    });    
    console.log('superData');
    console.log(superData) ;
</script>

<article>
	<h1>{superData.name}</h1>
    <p>id: {superData.id}</p>
	<p>weight: {superData.weight}</p>
</article>