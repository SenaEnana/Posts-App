function TextInput({ value, type, name, label, onChange, error, placeholder}) {
    return (
      <div className="col-12 row">
        <div>
          <label className="text-dark float-start p-0 fs-5">{label}</label>
        </div>
        <div className="form-group">
          <input
            type={type}
            className="form-control text-dark fs-6 m-0"
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
          />
        </div>
        {<p className="text-danger text-start m-1">{error}</p>}
      </div>
    );
  }
  
  export default TextInput;