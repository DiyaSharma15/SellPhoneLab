//Component to display service types in What We Do Section

import Image from "next/image";
import Link from "next/link";
import styles from "./ServiceCard.module.css";

//Function to accept serviceCard display options
function ServiceCard({ title, description, imageSrc, readMoreLink }) {
  return (
    <div className={styles.card}>
      <Image src={imageSrc} alt={title} width={175} height={175} />
      <h2>{title}</h2>
      <p>{description}</p>
      {readMoreLink && (
        <Link href={readMoreLink} className="btn btn-primary">
          Read more
        </Link>
      )}
    </div>
  );
}

export default ServiceCard; //Export to use component
