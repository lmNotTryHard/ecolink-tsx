import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Contact = ({ setSelectedPage }: Props) => {
  const inputStyles = `flex mb-5 w-full rounded-lg bg-neutral-300 text-neutral-600
		px-5 py-3 placeholder-neutral-800`;

  const { register, trigger } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contact" className="relative h-[140%] w-full">
      <motion.div
        className="h-1/2 w-full"
        onViewportEnter={() => setSelectedPage(SelectedPage.Contact)}
      >
        <div className="absolute h-full w-full z-10" />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2163.459384965869!2d71.41161107594374!3d51.088370541229196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424585875bc02a17%3A0x573dd2c7f135d8af!2sAstana%20Hub!5e1!3m2!1sen!2skz!4v1715010041304!5m2!1sen!2skz"
          width="100%"
          height="100%"
          className="brightness-75"
          loading="lazy"
        />
      </motion.div>
      <div className="h-1/2 w-full bg-green-800" />
      <motion.div className="absolute md:top-[45%] top-[15%] z-20 left-0 right-0 mx-auto xs:w-full sm:w-4/6 md:w-4/6 h-fit bg-white rounded-lg p-10 flex max-md:flex-col justify-between">
        <motion.div
          className="h-fit text-neutral-800 py-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <div>
            <h1 className="font-bold text-2xl md:pb-4">Свяжитесь с нами</h1>
            <p>Астана - Проспект Мангилик Ел, С4.6</p>
          </div>
          <div>
            <h1 className="font-bold text-lg pt-8 md:pt-10">
              Электронная почта
            </h1>
            <a href="mailto:green.kz.info@gmail.com">green.kz.info@gmail.com</a>
          </div>
          <div>
            <h1 className="font-bold text-lg md:pt-4">Контактный номер</h1>
            <a href="tel:+77767859072">+7 (776) 785 9072</a>
          </div>
        </motion.div>
        <div className="h-full">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, scale: 0 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/green.kz.info@gmail.com"
              method="POST"
            >
              <input
                className={inputStyles}
                type="text"
                placeholder="Имя"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />

              <input
                className={inputStyles}
                type="text"
                placeholder="Электронная почта"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />

              <textarea
                className={inputStyles}
                placeholder="Сообщение"
                rows={4}
                cols={50}
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              <button
                type="submit"
                className="mt-5 py-3 px-8 rounded-full font-semibold text-[13px] text-white bg-[#194D5A] transition shadow-md hover:-translate-y-[2px] hover:shadow-xl"
              >
                Отправить
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
