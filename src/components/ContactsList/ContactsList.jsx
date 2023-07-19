import PropTypes from "prop-types";
import css from "./ContactList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getContacts, getFilter } from "redux/selectors";
import { deleteContact } from "redux/contactsSlice";

export const ContactsList = () => {
	const dispatch = useDispatch();

	const contacts = useSelector(getContacts);

	const filter = useSelector(getFilter);

	const normalizedFilter = filter.toLowerCase();
	const visiableContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));

	return (
		<ul className={css.contactsList}>
			{visiableContacts.map(({ name, number, id }) => (
				<li className={css.contactItem} key={id}>
					<p>{name}</p> <p>{number}</p>
					<button className={css.contactBtn} onClick={() => dispatch(deleteContact(id))}>
						Delete
					</button>
				</li>
			))}
		</ul>
	);
};

ContactsList.protoTypes = {
	visiableContacts: PropTypes.array.isRequired,
	deleteContact: PropTypes.func.isRequired,
};