import styles from "@/components/Button.module.css"
export default() => {

  return (
    <button type="button" className={`btn btn-outline-danger ${styles.button}`}>Book now for early bird prices</button>
  )
}