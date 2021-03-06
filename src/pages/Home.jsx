import {useState, useEffect} from 'react';
import {getAllCategories} from '../api';
import {Preloader} from '../components/Preloader';
import {CategoryList} from '../components/CategoryList';
import {Search} from '../components/Search';
import {useLocation, useHistory} from 'react-router-dom';

function Home() {
  const [catalog, setCatalog] = useState([]);
  const [filteredCatalog, setFilteredCatalog] = useState([]);

  const {pathname, search} = useLocation();
  const history = useHistory();

  const handleSearch = (str) => {
    setFilteredCatalog(catalog.filter(item => item.strCategory.toLowerCase().includes(str.toLowerCase())))
    history.push({
      pathname,
      search: `?search=${str}`
    })
  }

  useEffect(() => {
    getAllCategories().then(data => {
        setFilteredCatalog(
          search
            ? data.categories.filter((item) =>
                item.strCategory
                  .toLowerCase()
                  .includes(search.split("=")[1].toLowerCase())
              )
            : data.categories
        );
    }, [search, catalog])
  })

  return (
    <>
      <Search cb={handleSearch} />  
      {!filteredCatalog.length ? <Preloader /> : (
        <CategoryList catalog={filteredCatalog} />
      )}
    </>
  );
}

export {Home};