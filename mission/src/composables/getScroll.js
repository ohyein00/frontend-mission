import { onMounted, ref } from 'vue';

const getScroll = () => {
  const scrollValue = ref(0);
  onMounted(() => {
    window.addEventListener('scroll', () => {
      scrollValue.value = window.scrollY;
    });
  });
  return { scrollValue };
};
export default getScroll;
