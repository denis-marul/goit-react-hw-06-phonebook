import css from './Form.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {addContact} from 'redux/contactsSlice';
import { nanoid } from 'nanoid'

export const Form = () => {

    const dispatch = useDispatch();
  
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget;
         dispatch(addContact({
            name: form.elements.name.value,
            number: form.elements.number.value,
            id: nanoid(5),
         }))
         
        form.reset();    
    };
     
    return <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label}>Name</label>
        <input
            className={css.formInput}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
        />
        <label className={css.label}>Number</label>
        <input
            className={css.formInput}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
        />
        <button className={css.submitBtn} type="submit">Add contact</button>
    </form>
    
};

Form.protoTypes = {
    handleSubmit: PropTypes.func.isRequired,
}