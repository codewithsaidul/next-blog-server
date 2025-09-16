import { prisma } from "../../config/db";

const getBlogStat = async () => {
  return await prisma.$transaction(async (tx) => {
    const aggregate = await tx.post.aggregate({
      _count: true,
      _sum: { views: true },
      _avg: { views: true },
      _min: { views: true },
      _max: { views: true },
    });

    const featuredCount = await tx.post.count({
      where: { isFeatured: true },
    });

    const topFeatured = await tx.post.findFirst({
      where: { isFeatured: true },
      orderBy: {
        views: "desc",
      },
    });

    const lastWeek = new Date();
    lastWeek.setDate(lastWeek.getDate() - 7)

    const lastWeekPostCount = await tx.post.count({
        where: {
            createdAt: {
                gte: lastWeek
            }
        }
    })

    return {
      stats: {
        totalPosts: aggregate._count || 0,
        totalViews: aggregate._sum.views || 0,
        avgViews: aggregate._avg.views || 0,
        minViews: aggregate._min.views || 0,
        maxViews: aggregate._max.views || 0,
      },
      featured: {
        featuredCount: featuredCount || 0,
        topFeatured: topFeatured || {},
        lastWeekPostCount: lastWeekPostCount || 0
      }
    };
  });
};

export const StatsService = {
  getBlogStat,
};
