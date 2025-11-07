<template>
  <div class="min-h-screen bg-gray-50 text-gray-900">

    <!-- hero -->
    <section class="px-6 md:px-20 py-24 bg-white border-b">
      <div class="max-w-5xl mx-auto">
        <h1 class="text-4xl md:text-6xl font-bold leading-tight">
          Learn the skills that will shape your future.
        </h1>
        <p class="text-xl mt-4 text-gray-600">
          Join thousands of learners studying tech, business, design & more.
        </p>

        <div class="mt-8">
          <button class="px-8 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
            Explore Courses
          </button>
        </div>
      </div>
    </section>


    <!-- categories -->
    <section class="px-6 md:px-20 py-20">
      <h2 class="text-3xl font-bold mb-10">Top Categories</h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="p-6 bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer">
          <h3 class="font-semibold text-xl mb-2">Web Development</h3>
          <p class="text-gray-500">HTML, CSS, JavaScript, React, Next.js</p>
        </div>

        <div class="p-6 bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer">
          <h3 class="font-semibold text-xl mb-2">Data Science</h3>
          <p class="text-gray-500">Python, Pandas, Machine Learning</p>
        </div>

        <div class="p-6 bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer">
          <h3 class="font-semibold text-xl mb-2">Business & Management</h3>
          <p class="text-gray-500">Marketing, Strategy, Leadership</p>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
