import PropTypes from 'prop-types';
import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { filterAction  } from 'redux/filterReducer';
export const Filter = () => {

    const dispatch = useDispatch();
    
    const onChangeFilter = event => {
        const filter = event.currentTarget.value;
         dispatch(filterAction(filter))
        
  };

    return <div className={css.filter} >
        <label className={css.filterLabel}>Find contact by name</label>
        <input className={css.filterInput} type="text" name="filter" onChange={onChangeFilter}/>
    </div>
}

Filter.protoTypes = {
    onChangeFilter: PropTypes.func.isRequired,
}