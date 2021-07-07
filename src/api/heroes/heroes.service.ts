import cache from '../cache/cache';

export const getAll = async () => {
    let response = await cache.get('/all.json');

    return response.data;
};

export const getBySlug = async (slug: string) => {
    slug = slug.toLowerCase();
    slug = slug.trim();

    let heroes = await getAll();
    let heroLocated = [];

    if (slug.length >= 3) {

        heroes.forEach(hero => {
            (hero.slug.indexOf(slug) != -1) && heroLocated.push(hero);
        });

        return (heroLocated.length != 0) ? heroLocated : 404;

    } else {
        return 400;
    }


};

export const searchByQuery = async (query) => {
    query = query.toLowerCase();
    query = query.trim();

    var heroes = await getAll();
    var searchReturn = [];

    if (query.length >= 3) {
        for (let hero of heroes) {
            for (let element in hero) {
                if (element == "name") {
                    let name = hero[element].toLowerCase();

                    (name.indexOf(query) != -1) && searchReturn.push(hero);

                } else if (element == "work") {
                    for (let item in hero[element]) {
                        item = hero[element][item];
                        item = item.toLowerCase();

                        (item.indexOf(query) != -1) && searchReturn.push(hero);
                    }
                } else if (element == "appearance" || element == "biography") {
                    for (let item in hero[element]) {
                        let found = false;
                        item = hero[element][item];

                        if (typeof item == "string") {
                            item = item.toLowerCase();

                            (item.indexOf(query) != -1) && (found = true);

                        } else if (typeof item == "object") {
                            item = JSON.stringify(item);
                            item = item.toLowerCase();

                            (item.indexOf(query) != -1) && (found = true);
                        }
                        (found == true) && searchReturn.push(hero);
                    }
                }

            }
        }
        return (searchReturn.length != 0) ? searchReturn : 204;
    } else {
        return 400;
    };
};