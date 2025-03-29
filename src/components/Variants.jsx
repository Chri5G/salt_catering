import { easeInOut } from "framer-motion";


export const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.5
    }
  }
}

export const appearVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    }
  }
}

export const titleVariants={
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    }
  }
}
export const textLRVariants = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  visible: {
    clipPath: "inset(0 0% 0 0)",
    opacity: 1,
    transition: {
      duration: 1.5,
      delay:0.5,
    }
  }
}

export const yVariants ={
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: easeInOut,
    }
  }
}