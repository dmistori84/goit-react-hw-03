import css from "./SearchBar.module.css";

const SearchBar = ({ filter, onChangeFilter }) => {
	return (
		<label className={css.label}>
			Find contacts by name
			<input
				className={css.input}
				type="text"
				value={filter}
				onChange={onChangeFilter}
			/>
		</label>
	);
};

export default SearchBar;
