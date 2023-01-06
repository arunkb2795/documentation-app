import { useState } from 'react';
import { useActions } from '../Hooks/useActions';
import { useTypedSelector } from '../Hooks/useTypedSelector';


const RepositoriesList: React.FC = () => {

  const [term, setTerm] = useState('');
  const { searchRepositories } = useActions();
  const { loading, data, error } = useTypedSelector((state) => state.repositories)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value)
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchRepositories(term)
  }

  return (
    <div>
      <h2>Search Packages</h2>
      <form onSubmit={onSubmit}>
        <input value={term} type="search" onChange={handleChange} />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>loading...</h3>}
      {!error && !loading && data.map(item => <div key={item}>{item}</div>)}
    </div>
  );
};

export default RepositoriesList;
