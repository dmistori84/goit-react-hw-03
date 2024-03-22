import { Field, Form, Formik } from "formik";
import { nanoid } from "nanoid";

const ContactForm = () => {
	return (
		<Formik initialValues={{}} onSubmit={() => {}}>
			<Form>
				<Field type="text" name="username" />
				<Field type="tel" name="number" />
				<button type="submit">Add contact</button>
			</Form>
		</Formik>
	);
};

export default ContactForm;
