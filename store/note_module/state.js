/**
 * 记事本state
 *
 * @format
 */

const state = () => {
  return {
    // 选中的城市
    todoListData: [
      {
        id: 1, // id
        title: 'Hello World', // 标题
        desc: 'Learn how to progrom.', // 描述
        finish: false, // 是否完成
      },
      {
        id: 2,
        title: 'Hello vue',
        desc: 'Learn how to build a vue application.',
        finish: false, // 是否完成
      },
      {
        id: 3,
        title: 'How Vuex',
        desc: 'Learn how to use Vuex in a vue application.',
        finish: true, // 是否完成
      },
    ],
  }
}

export default state
