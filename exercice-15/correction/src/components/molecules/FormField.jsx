// Un champ de formulaire avec son label
export function FormField({ id, label, type = "text", placeholder, required = false }) {
  return (
    <div className="form-group">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input type={type} id={id} name={id} className="form-input" placeholder={placeholder} required={required} />
    </div>
  );
}
