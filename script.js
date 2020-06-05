Vue.component('task', {
    props: ['data'],
    methods: {
        task_done() {
            this.$emit('task_done');
        }
    },
    template: `
    <div class="task">
        <div class="task__wrap">
            <div class="task__text">
                <h3 class="task__title">{{data.title}}</h3>
                <p class="task__desc">{{data.desc}}</p>
            </div>

            <button class="task__done" @click="task_done()">
                <i class="fas fa-check-circle"></i>
            </button>
        </div>
    </div>
    `
})

var vue = new Vue({
    el:'#app',
    data: {
        new_task: {
            title: '',
            desc: ''
        },
        tasks: [
            {
                title: 'Finish to watch video about Vue',
                desc: 'How to do simple "todo list" with Vue.JS.'
            },
            {
                title: 'Questions map',
                desc: 'To write all questions about a current task in my MindMap.'
            },
            {
                title: 'Explore questions',
                desc: 'Explore all confusing moments about Vue.JS from the MindMap.'
            }
        ]
    },
    methods: {
        delete_task(id) {
            this.tasks.splice(id, 1);
        },
        add_task() {
            if(this.new_task.title != '') {
                this.tasks.push({
                    title: this.new_task.title,
                    desc: this.new_task.desc
                });
                    this.new_task.title = '',
                    this.new_task.desc = ''
            }
        }
    }
});