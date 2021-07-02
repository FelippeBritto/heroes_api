import cache from '../cache/cache';

export const getAll = async () => {
    let response = await cache.get('/all.json');
    
    return response.data; 
};

export const getBySlug = async (slug) => {
    slug = slug.toLowerCase();
    slug = slug.trim();
    
    let heroes =  await getAll();
    let heroLocated = [];
    
    if(slug.length >= 3 ){

        heroes.forEach(hero => {   
            (hero.slug.indexOf(slug) != -1) && heroLocated.push(hero);
        });

        return (heroLocated.length != 0)? heroLocated : 404;
    
    } else {
        return 400;
    }
};

export const searchByQuery = async (query) => {
    query = query.toLowerCase();
    query = query.trim();

    let heroes =  await getAll();
    let heroLocated = [];
    let heroAttribute = null;

    if(query.length >= 3 ){
        
       for(let hero of heroes) {

            for(let attribute in hero){

                heroAttribute = hero[attribute];     
                heroAttribute = JSON.stringify(heroAttribute);
            };
            (heroAttribute.indexOf(query) != -1) && heroLocated.push(hero)
        };

        return (heroLocated.length != 0)? heroLocated : 204;
        
    } else {
        return 400;
    };
};