<template>
    <div class="header">
        <div class="rubrics">
            <span @click="setRubric('general')" :class="{ rubric: true, rubricActive: rubric.includes('general') }">
                Главное
            </span>
            <span @click="setRubric('Москва и область')" :class="{ rubric: true, rubricActive: rubric.includes('Москва и область') }">
                Москва и область
            </span>
            <span @click="setRubric('Видео')" :class="{ rubric: true, rubricActive: rubric.includes('Видео') }">
                Видео
            </span>
            <span @click="setRubric('Интересное')" :class="{ rubric: true, rubricActive: rubric.includes('Интересное') }">
                Интересное
            </span>
            <span @click="setRubric('Политика')" :class="{ rubric: true, rubricActive: rubric.includes('Политика') }">
                Политика
            </span>
            <span @click="setRubric('Общество')" :class="{ rubric: true, rubricActive: rubric.includes('Общество') }">
                Общество
            </span>
            <span @click="setRubric('Экономика')" :class="{ rubric: true, rubricActive: rubric.includes('Экономика') }">
                Экономика
            </span>
            <span @click="setRubric('В мире')" :class="{ rubric: true, rubricActive: rubric.includes('В мире') }">
                В мире
            </span>
            <span @click="setRubric('Спорт')" :class="{ rubric: true, rubricActive: rubric.includes('Спорт') }">
                Спорт
            </span>
            <span @click="setRubric('Проишествия')" :class="{ rubric: true, rubricActive: rubric.includes('Проишествия') }">
                Проишествия
            </span>
            <span @click="setRubric('Культура')" :class="{ rubric: true, rubricActive: rubric.includes('Культура') }">
                Культура
            </span>
            <span @click="setRubric('Технологии')" :class="{ rubric: true, rubricActive: rubric.includes('Технологии') }">
                Технологии
            </span>
            <span @click="setRubric('Наука')" :class="{ rubric: true, rubricActive: rubric.includes('Наука') }">
                Наука
            </span>
            <span @click="setRubric('Ещё')" :class="{ rubric: true, rubricActive: rubric.includes('Ещё') }">
                Ещё
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: "Header",
    data(){
        return {
            rubric: 'general'
        }
    },
    mounted(){
        if(this.$route.query.rubric !== null && this.$route.query.rubric !== undefined){
            this.rubric = this.$route.query.rubric
        }
    },
    emits: [
        'changeRubric'
    ],
    methods: {
        setRubric(newRubric){
            this.rubric = newRubric
            this.$router.push({ name: 'Home', query: { rubric: newRubric } })
            this.$emit('changeRubric', newRubric)
        }
    }
}
</script>

<style scoped>
    .header {
        background-color: rgb(255, 255, 255);
        height: 50px;
        width: 100%;
    }

    .rubrics {
        display: flex;
        width: 85%;
        margin: auto;
        justify-content: space-around;
        align-items: center;
        height: 100%;
    }

    .rubric {
        cursor: pointer;
    }

    .rubric:hover {
        color: rgb(255, 0, 0);
    }

    .rubricActive {
        font-weight: bolder;
    }

</style>