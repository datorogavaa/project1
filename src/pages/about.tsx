
import styles from "@/styles/Home.module.css"
export default () => {
    return (
        <>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '50px'}}>
            <h2 className={styles.abouth}>About Us</h2>
            <p className={styles.aboutt}>
            Here's some fake text you can use for an "About" page:
            
            About Us
            Welcome to our website! We are a passionate team dedicated to bringing you the best products and services available. Our journey began with a simple idea: to create a platform that brings convenience and quality to your fingertips.
            
            At our core, we believe in offering only the finest selection of products, handpicked to meet the diverse needs of our customers. Our team works tirelessly to ensure that every product we offer meets the highest standards of quality, reliability, and value.
            
            We are committed to creating a user-friendly experience, where you can easily browse, shop, and enjoy everything we have to offer. Whether you’re looking for the latest trends or classic staples, we’ve got something for everyone.
            
            Our mission is to make shopping easier, faster, and more enjoyable. We constantly strive to improve our services and expand our selection, always keeping your needs in mind.
            
            Thank you for choosing us. We look forward to serving you!
            </p>
        </div>
        </>
    )
}