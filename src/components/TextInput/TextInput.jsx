import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.css";
import Icon from "../Icon/Icon.jsx";
import { classNames } from "../../utils";

const TextInput = ({ type, label, id, error, ...props }) => {
  return (
    <div className={styles.textinputWrapper}>
      <input
        id={id}
        placeholder=" "
        className={classNames(styles.textinput, error && styles.textinputError)}
        type={type}
        {...props}
      />
      <label htmlFor={id} className={styles.textinputLabel}>
        {label}
      </label>
      {error && (
        <>
          <Icon
            type="alert"
            backgroundColor="#ed6d47"
            iconColor="#feb8a5"
            className={styles.errorIcon}
          />
          <p className={styles.errorMsg}>{error}</p>
        </>
      )}
    </div>
  );
};

TextInput.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  error: PropTypes.string
};

TextInput.defaultProps = {
  type: "text",
  label: "Label"
};

export default TextInput;
