import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contacts }) => {
	return (
		<div>
			ContactList
			<ul className={css.list}>
				{contacts.map(contact => (
					<Contact key={contact.id} contacts={contact} />
				))}
			</ul>
		</div>
	);
};

export default ContactList;
